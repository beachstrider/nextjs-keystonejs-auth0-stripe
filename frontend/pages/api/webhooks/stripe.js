import { buffer } from "micro"
import nc from 'next-connect'
import stripe from '../../../config/stripe'
import client from "../../../apollo-client"
import { gql } from "@apollo/client"

const handleStripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"]
  const signingSecret = process.env.STRIPE_SIGNING_SECRET
  const reqBuffer = await buffer(req)

  let event

  try {
    event = stripe.webhooks.constructEvent(reqBuffer, signature, signingSecret)
  } catch (error) {
    console.log(error)
    return res.status(400).send(`Webhook error: ${error.message}`)
  }

  const invoice = event.data.object
  let subscriptionStatus


  switch (event.type) {
    case 'invoice.paid': {
      subscriptionStatus = 'active'
      break
    }

    case 'invoice.payment_failed': {
      subscriptionStatus = 'failed'
      break
    }

    default: {
      console.error(`Unhandled event type: ${event.type}`)
      break
    }
  }

  if (subscriptionStatus === ('active' || 'failed')) {
    await client.mutate({
      mutation: gql`
      mutation {
        updateUser(data: {
          subscriptionStatus: "${subscriptionStatus}"
        }, where: {email: "${invoice.customer_email}"}) {
          id
        }
      }
    `,
    })
  }

  res.status(200)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = nc({ attachParams: true }).post(handleStripeWebhook)

export default handler