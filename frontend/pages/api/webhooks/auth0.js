import nc from 'next-connect'
import stripe from '../../../config/stripe'
import client from "../../../apollo-client"
import { gql } from "@apollo/client"

const handleAuth0Webhook = async (req, res) => {
  const { name, email, plan } = req.body

  const customer = await stripe.customers.create({ name, email })

  if (email) {
    await client.mutate({
      mutation: gql`
        mutation CreateUser {
          createUser(
            data: {
              name: "${name}"
              email: "${email}"
              password: "password"
              company: "Unknown"
              plan: "${plan}"
              customerId: "${customer.id}"
            }
          ) {
            id
          }
        }
      `,
    })

    return res.status(200).json({
      message: `User with email: ${email} has been created successfully!`,
    })
  }

  return res.json({message: 'No action.'})
}

const handler = nc({ attachParams: true }).post(handleAuth0Webhook)

export default handler
