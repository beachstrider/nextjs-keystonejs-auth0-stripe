import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {
  useRecoilState,
} from 'recoil'
import { useUser } from "@auth0/nextjs-auth0"
import { useEffect } from "react"

import { authUserAtom } from '../store'
import getUserProfile from '../utils/getUserProfile'

export default function Layout({ children }) {
  const { user } = useUser()
  const [ _, setAuthUser ] = useRecoilState(authUserAtom)

  console.log('=== user atom', _)

  useEffect(() => {
    async function fetchData() {
      const userProfile = await getUserProfile(user.email)
      setAuthUser({...user, ...userProfile })
    }

    if(user) fetchData()
  }, [user])

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
