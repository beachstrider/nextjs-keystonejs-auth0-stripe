import Head from "next/head"
import styles from "../styles/Home.module.css"
import Router from "next/router"
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useRecoilValue } from 'recoil'
import { authUserAtom } from '../store'
import Link from "next/link"

const Index = () => {
  const user = useRecoilValue(authUserAtom)
  if(user && user.subscriptionStatus === 'active') Router.push('/home')
  if(user && user.subscriptionStatus === 'no') Router.push('/subscribe')

  return (
    <div className={styles.container}>
      <Head>
        <title>...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>
        {user.subscriptionStatus === 'incomplete' && 'Thank you, your subscription is ordered.'}
        {user.subscriptionStatus === 'failed' && 
          <>
            <div>Your subscription is failed.</div>
            <Link href="/subscribe">Goto resubscribe</Link>
          </>
        }
        </h2>
      </main>
    </div>
  )
}

 
export default withPageAuthRequired(Index)