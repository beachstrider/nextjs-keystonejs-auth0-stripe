import { gql } from "@apollo/client"
import client from "../apollo-client"

const getUserProfile = async (email) => {
  const { data: { user } } = await client.query({
    query: gql`
      query{
        user(where: {email: "${email}"}){
          name
          email
          plan
          customerId
          subscriptionId
          subscriptionStatus
        }
      }
    `,
  })

  return user
}

export default getUserProfile