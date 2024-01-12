import { FaGoogle, FaFacebook } from "react-icons/fa"
import UIIconButton from "../../UI/Button/IconButton";

const buttonSize = "w-full py-5 md:py-7 h-8 md:h-12"
const iconSize = "h-auto w-5 md:w-6"
const textSize = "text-sm md:text-lg lg:text-xl"

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