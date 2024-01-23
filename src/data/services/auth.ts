import {
	signInWithPopup,
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
			user = result.user.providerData
			return { credential, token, user }
		})
		.catch((error: AuthError) => {
			errorCode = error.code
			errorMessage = error.message
			email = error.customData.email
			credential = GoogleAuthProvider.credentialFromError(error)
			throw { errorCode, errorMessage, email, credential }
		})
}