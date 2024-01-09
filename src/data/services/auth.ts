import {
	signInWithPopup,
	// signOut,
	GoogleAuthProvider,
	AuthError,
} from "firebase/auth"
import { auth } from "./firebase"

export const authSigninGoogle = async () => {
	const provider = new GoogleAuthProvider()
	let credential, token, user, errorCode, errorMessage, email
	return signInWithPopup(auth, provider)
		.then((result) => {
			credential = GoogleAuthProvider.credentialFromResult(result)
			token = credential?.accessToken
			user = result.user
			return { credential, token, user }
		})
		.catch((error: AuthError) => {
			errorCode = error.code
			errorMessage = error.message
			email = error.customData.email
			credential = GoogleAuthProvider.credentialFromError(error)
			return { errorCode, errorMessage, email, credential }
		})
}

// export const authSignout = async()=>{
//   signOut(auth).then(()=>{
//     return {
//       status: "success",
//       message: "You have successfully signed out"
//     }
//   }).catch((error: AuthError)=>{
//     return {
//       status: error.code,
//       message: error.message
//     }
//   })
// }
