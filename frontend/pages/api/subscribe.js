import nc from 'next-connect'
import stripe from '../../config/stripe'
import client from '../../apollo-client'
import { gql } from "@apollo/client"

const createSubscription = async (req, res) => {
  try {
    const { customerId, priceId, email, name, address, plan } = req.body

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      metadata: {},
      expand: ['latest_invoice.payment_intent'],
    })

    await client.mutate({
      mutation: gql`
        mutation {
          updateUser(data: {
            name: "${name}"
            address: "${address}"
            plan: "${plan}"
            subscriptionId: "${subscription.id}"
            subscriptionStatus: "incomplete"
          }, where: {email: "${email}"})
          {
            id
          }
        }
      `,
    })

    res.status(200).json({
      code: 'subscription_created',
      subscriptionId: subscription.id,
      clientSecret:
        subscription.latest_invoice.payment_intent.client_secret,
      status: subscription.status,
    })
  } catch (e) {
    console.error(e)
    res.status(400).json({
      code: 'subscription_creation_failed',
      error: e,
    })
  }
}

const cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.body

    const deletedSubscription = await stripe.subscriptions.del(
      subscriptionId
    )

    res.status(200).json({
      code: 'subscription_deleted',
      deletedSubscription,
    })
  } catch (e) {
    console.error(e)
    res.status(400).json({
      code: 'subscription_deletion_failed',
      error: e,
    })
  }
}

const handler = nc({ attachParams: true })
  .post(createSubscription)
  .delete(cancelSubscription)

export default handler