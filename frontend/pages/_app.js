import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import React from "react"
import { UserProvider } from "@auth0/nextjs-auth0"
import { useEffect } from "react"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import Layout from "../components/Layout"
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ApolloProvider>
    </UserProvider>
  )
}

export default MyApp
