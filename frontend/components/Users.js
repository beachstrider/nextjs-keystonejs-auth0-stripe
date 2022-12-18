import { useQuery, gql } from "@apollo/client"

const GetUsersQuery = gql`
  query GetUsersQuery {
    users {
      name
      email
      company
    }
  }
`

export default function Users() {
  const { data, loading, error } = useQuery(GetUsersQuery)

  if (loading) {
    return <h2>Loading Data...</h2>
  }

  if (error) {
    console.error(error)
    return <h2>Sorry, there has been an error...</h2>
  }

  const { users } = data

  return (
    <>
      {users.map((user) => (
        <div key={user.email}>
          <p>
            <span>
              🚀 User name: <strong>{user.name}</strong>
            </span>
            <span>
              Company: <strong>{user.company}</strong>
            </span>
            <span>
              Email: <strong>{user.email}</strong>
            </span>
          </p>
        </div>
      ))}
    </>
  )
}
