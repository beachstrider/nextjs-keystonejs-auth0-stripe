import Head from "next/head"
import styles from "../styles/Home.module.css"
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import withSubscription from '../middlewares/withSubscription'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>
          Welcome, your subscription is active!
        </h2>
      </main>
    </div>
  )
}

 
export default withPageAuthRequired(withSubscription(Home))