import { useEffect, useState } from 'react'
import Router from "next/router"
import {
  useRecoilValue,
} from 'recoil'
import { authUserAtom } from '../store'

const Index = (Page) => {
  const AuthorizedComponent = (props) => {
    const user = useRecoilValue(authUserAtom)
    const [subscriptionStauts, setSubscriptionStatus] = useState(null)

    useEffect(() => {
      if(user){
        if(user.subscriptionStatus === 'active' ){
          setSubscriptionStatus(true)
        }else if(user.subscriptionStatus === 'no'){
          Router.push('/subscribe')
          setSubscriptionStatus(false)
        }else{
          Router.push('/processing')
          setSubscriptionStatus(false)
        }
      }
    }, [user])

    if(subscriptionStauts === true) return <Page {...props} />
    return null
  }

  return AuthorizedComponent
}

export default Index
