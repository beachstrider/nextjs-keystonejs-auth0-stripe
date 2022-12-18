import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
  return (
    <>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Pricing</h1>
            <p className="fs-5 text-muted">
              Here's a sample of our pricing. We offer a variety of plans to fit
              your needs.
            </p>
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Basic</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $10<small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Link
                    type="link"
                    className={"w-100 btn btn-lg btn-outline-secondary"}
                    href="/api/auth/signup?plan=basic"
                  >
                    Get started with basic
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Premium</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $100<small className="text-muted fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Link
                    type="link"
                    className={"w-100 btn btn-lg btn-primary"}
                    href="/api/auth/signup?plan=premium"
                  >
                    Enroll now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-6 text-center mb-4">Compare plans</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th width="40%"></th>
                  <th width="30%">Free</th>
                  <th width="30%">Basic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Public
                  </th>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Private
                  </th>
                  <td></td>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-start">
                    Permissions
                  </th>
                  <td></td>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Sharing
                  </th>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Unlimited members
                  </th>
                  <td></td>
                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Extra security
                  </th>
                  <td></td>

                  <td>
                    <Image
                      className="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                      alt=""
                    ></Image>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}
