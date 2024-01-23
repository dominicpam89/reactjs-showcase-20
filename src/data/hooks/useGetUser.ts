import { UserInfo } from "firebase/auth"

export const useGetUser = ()=>{
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  const data: { token: string | null; user: UserInfo | null } = {
		token: null,
		user: null,
  }
  if(token) data.token = JSON.parse(token)
  if(user) data.user = JSON.parse(user) 
  return data
}