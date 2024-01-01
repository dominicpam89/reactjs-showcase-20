import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import UIContainer from "../UI/Container"

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
    if(!searchParams.get("mode")) setSearchParams( "mode=login")
  },[searchParams, setSearchParams])
  return <>
    <UIContainer aria-label="auth-container">
      <p>Test</p>
    </UIContainer>
  </>
}
 
export default Auth;