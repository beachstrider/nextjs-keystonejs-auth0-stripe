import Image from "next/image"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0"



export default function Nav() {

  const { user, error, isLoading } = useUser()


  return (
    <nav className={"navbar navbar-expand-lg bg-light"}>
      <div className={"container-fluid"}>
        <Link className={"navbar-brand"} href="/">

        </Link>
        <button
          className={"navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={"navbar-toggler-icon"}></span>
        </button>
        {user && (
          <div
            className={"collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <Link
                  className={"nav-link active"}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} href="/inventory">
                  Inventory
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} href="/vendors">
                  Vendors
                </Link>
              </li>
              <li className={"nav-item dropdown"}>
                <Link
                  className={"nav-link dropdown-toggle"}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </Link>
                <ul className={"dropdown-menu"}>
                  <li>
                    <Link className={"dropdown-item"} href="myAccount">
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <Link className={"dropdown-item"} href="#">
                      Plan Details
                    </Link>
                  </li>
                  <li>
                    <Link className={"dropdown-item"} href="#">
                      Billing
                    </Link>
                  </li>
                  <li>
                    <Link className={"dropdown-item"} href="#">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link className={"dropdown-item"} href="#">
                      Refer a friend
                    </Link>
                  </li>
                  <li>
                    <hr className={"dropdown-divider"} />
                  </li>
                  <li>
                    <Link className={"dropdown-item"} href="/api/auth/logout">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="">{user.email}</div>
          </div>
        )}

        {!user && (
          <>
            <ul className=" navbar-nav">
              <li className={"nav-item"}>
                <Link
                  type="link"
                  className={"btn btn-outline-secondary"}
                  href="/api/auth/login"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}
