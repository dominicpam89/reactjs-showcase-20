import { FaGoogle, FaFacebook } from "react-icons/fa"
import { motion } from "framer-motion"
import UIIconButton from "../../UI/Button/IconButton"
import { useMediaQuery } from "../../data/hooks/useMediaQuery"
import useAuthSigninGoogle from "../../data/hooks/useAuthSigninGoogle"

const AuthEntry = () => {
	const largeScreen = useMediaQuery("(min-width: 768px)")
	const {onSignIn} = useAuthSigninGoogle()
	return (
		<motion.div
			className="max-w-md mx-auto w-full flex flex-col space-y-4 transition-none"
			initial={{opacity:0}}
			animate={{opacity:1}}
			transition={{delay:0.96, duration:0.64}}
		>
			<UIIconButton
				$size={largeScreen?"md":"xs"}
				$icon={<FaGoogle />}
				$textPos="start"
				$text="Signin with Google"
				customClass="bg-gradient-to-b from-primary-main-color to-neutral-100"
				onClick={()=>onSignIn()}
			/>
			<UIIconButton
				$size={largeScreen?"md":"xs"}
				$icon={<FaFacebook />}
				$textPos="start"
				$text="Signin with Facebook"
				customClass="bg-gradient-to-b from-secondary-main-color to-neutral-100"
			/>
		</motion.div>
  )
}
 
export default AuthEntry;