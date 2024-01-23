import { authSigninGoogle } from "../services/auth"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const useAuthSigninGoogle = ()=>{
  const navigate = useNavigate()
  const {mutate:onSignIn, isPending, isError, isSuccess, isIdle, error:signInError} = useMutation({
    mutationFn: ()=>authSigninGoogle(),
    onSuccess: (data)=>{
      localStorage.setItem("credential",JSON.stringify(data.credential))
      localStorage.setItem("token",JSON.stringify(data.token))
      localStorage.setItem("user",JSON.stringify(data.user[0]))
      navigate("/")
    }
  })
  const googleSignInState = {isPending, isError, isSuccess, isIdle}
  return {onSignIn, googleSignInState, signInError}
}

export default useAuthSigninGoogle