import { authSigninGoogle } from "../services/auth"
import { useQuery } from "@tanstack/react-query"

const useAuthSigninGoogle = ()=>{
  const {data, error, isError, isLoading} = useQuery({
    queryKey: ["auth","google"],
    queryFn: ()=>authSigninGoogle()
  })
  return {data, error, isError, isLoading}
}

export default useAuthSigninGoogle