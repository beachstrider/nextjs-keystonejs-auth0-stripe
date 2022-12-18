import CheckoutForm from "../components/CheckoutForm"
import Router from "next/router"
import { useRecoilValue } from 'recoil'
import { authUserAtom } from '../store'

export default function Index({priceIds}) {
  const user = useRecoilValue(authUserAtom)

  if(user && user.subscriptionStatus === 'active') Router.push('/home')
  else if(user && (user.subscriptionStatus === ('incomplete' || 'failed'))) Router.push('/processing')

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2 className="text-capitalize">{user.plan} Plan</h2>
        <p className="lead">Test card for success: 4242424242424242</p>
        <p className="lead">Test card for failed: 4000000000009995</p>
      </div>

      <div className="col-md-7 col-lg-8 mx-auto">
        {user &&
          <CheckoutForm customerId={user.customerId} priceId={priceIds[user.plan]} />
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const priceIds = {
    basic: process.env.STRIPE_BASIC_PLAN_PRICE_ID,
    premium: process.env.STRIPE_PREMIUM_PLAN_PRICE_ID
  }

  return {
    props: {
      priceIds
    }
  }
}