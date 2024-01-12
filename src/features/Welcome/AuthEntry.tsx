import { FaGoogle, FaFacebook } from "react-icons/fa"
import UIIconButton from "../../UI/Button/IconButton";

const buttonSize = "w-full py-4 md:py-6 h-6 md:h-10"
const iconSize = "h-auto w-4 md:w-5"
const textSize = "text-xs md:text-base lg:text-lg"

const AuthEntry = () => {
  return (
		<div className="max-w-md mx-auto w-full flex flex-col space-y-4">
			<UIIconButton 
        iconSize={iconSize}
        textSize={textSize}
        customClass={`
          bg-gradient-to-br from-primary-main-color/80 to-neutral-900/30
          ${buttonSize}
        `}
        icon={<FaGoogle />}
        textPos="left"
        text="Signin with Google"
      />
			<UIIconButton 
        iconSize={iconSize}
        textSize={textSize}
        customClass={`
          bg-gradient-to-bl from-neutral-900/30 to-primary-main-color/70
          ${buttonSize}
        `}
        icon={<FaFacebook />}
        textPos="left"
        text="Signin with Facebook"
      />
		</div>
  )
}
 
export default AuthEntry;