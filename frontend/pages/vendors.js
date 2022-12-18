import Vendors from "../components/Vendors"
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import withSubscription from '../middlewares/withSubscription'

function VendorsPage() {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <h2>Vendors Page</h2>
          <Vendors/>
        </div>
      </div>
    </div>
  )
}

export default withPageAuthRequired(withSubscription(VendorsPage))