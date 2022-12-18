import Head from "next/head"
import styles from "../styles/Home.module.css"
import Pricing from "../components/Pricing"
import Router from 'next/router'
import { useUser } from "@auth0/nextjs-auth0"

const Index = () => {
  const { user, error, isLoading } = useUser()

  if(user) Router.push('/home')
  else{
    if(!isLoading){
      return (
        <div className={styles.container}>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <Pricing />
          </main>
        </div>
      )

    }
  } 
}


export default Index