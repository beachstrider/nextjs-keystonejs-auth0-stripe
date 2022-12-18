import { useQuery, gql } from "@apollo/client"

const GetVendorsQuery = gql`
  query GetVendorsQuery {
    vendors {
      organizationName
      vendorEmail
      user {
        name
      }
    }
  }
`



export default function Vendors() {
  const { data, loading, error } = useQuery(GetVendorsQuery)

  if (loading) {
    return <h2>Loading Data...</h2>
  }

  if (error) {
    console.error(error)
    return <h2>Sorry, there has been an error...</h2>
  }

  const { vendors } = data

  return (
    <>
      {vendors.map((vendor) => (
        <div key={vendor.vendorEmail}>
          <p>
            <span>
              🚀 Vendor email: <strong>{vendor.vendorEmail}</strong>
            </span>
            <span>
              🚀 Vendor name: <strong>{vendor.organizationName}</strong>
            </span>
            <span>
              🚀 User name: <strong>{vendor.user.name}</strong>
            </span>
          </p>
        </div>
      ))}
    </>
  )
}
