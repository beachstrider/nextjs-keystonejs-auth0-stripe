import { useState } from 'react'
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useRecoilState } from 'recoil'
import { authUserAtom } from '../store'
import getUserProfile from '../utils/getUserProfile'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)

const CheckoutFormComponent = (props) => {
  const [error, setError] = useState(undefined)
  const [disabled, setDisabled] = useState(true)
  const stripe = useStripe()
  const elements = useElements()
  const [ user, setAuthUser ] = useRecoilState(authUserAtom)
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: ''
  })

  function handleCardInputChange(event) {
    // Listen for changes in card input
    // and display errors, if any, to the user
    // Also control the disabled state of the submit button
    // if the input field is empty
    setDisabled(event?.empty)
    setError(event?.error?.message ?? '')
  }

  async function handleCheckoutFormSubmit(event) {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return
    }

    setDisabled(true)

    // Call the subscribe endpoint and create a Stripe subscription 
    // object. Returns the subscription ID and client secret
    const subscriptionResponse = await fetch(
      '/api/subscribe',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId: props.customerId, priceId: props.priceId, email: user.email, name: userInfo.name, address: userInfo.address, plan: user.plan })
      }
    )

    const subscription = await subscriptionResponse.json()
    
    setDisabled(false)

    const stripePayload = await stripe.confirmCardPayment(
      subscription.clientSecret, // returned by subscribe endpoint
      {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }
    )
    
    if (stripePayload.error) {
      setError(stripePayload.error.message)
      return
    }else{
      const userProfile = await getUserProfile(user.email)
      setAuthUser({...userProfile })
    }
  }

  return (
    <form onSubmit={handleCheckoutFormSubmit}>
      <input type="text" value={userInfo.name} onChange={e => setUserInfo({...userInfo, name: e.target.value})} placeholder="Full name" required />
      <input type="text" value={userInfo.address} onChange={e => setUserInfo({...userInfo, address: e.target.value})} placeholder="Address" required />
      <CardElement onChange={handleCardInputChange} />
      {error && <div className="alert alert-danger">{error}</div>}
      <button
        disabled={!stripe || disabled}
        type='submit'
      >
        Subscribe
      </button>
    </form>
  )
}

export default function CheckoutForm(props) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormComponent {...props} />
    </Elements>
  )
}