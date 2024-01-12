import { FaGoogle, FaFacebook } from "react-icons/fa"
import UIIconButton from "../../UI/Button/IconButton";

/*
  Determining color of iconButton based on container-backgorund 
  container-backgorund refers to Welcome/Container.tsx
*/
const twClasses = {
	slide1: {
		btnIconGoogle:
			"bg-gradient-to-br from-primary-main-color/80 to-neutral-900/30",
		btnIconFacebook:
			"bg-gradient-to-bl from-neutral-900/30 to-primary-main-color/70",
	},
	slide2: {
		btnIconGoogle: "",
		btnIconFacebook: "",
	},
	slide3: {
		btnIconGoogle: "",
		btnIconFacebook: "",
  },
}

/* 
  Determining size:
  buttonSize => button itself
  iconSize => responsive size based on screen and buttonSize
  textSize => responsive size based on screen and buttonSize 
*/ 
const buttonSize = "w-full py-4 md:py-6 h-6 md:h-10"
const iconSize = "h-auto w-4 md:w-5"
const textSize = "text-xs md:text-base lg:text-lg"

const getIconClass = (currentSlide:string|null, type:"google"|"facebook")=>{
  let _class
  switch(currentSlide){
    case "1":
      _class = type==="google" ? twClasses.slide1.btnIconGoogle : twClasses.slide1.btnIconFacebook
      break
    case "2":
      _class = type==="google" ? twClasses.slide2.btnIconGoogle : twClasses.slide2.btnIconFacebook
      break
    default:
      _class = type==="google" ? twClasses.slide3.btnIconGoogle : twClasses.slide3.btnIconFacebook
      break
  }
  return _class
}


/* 
  The Component itself
*/
type Props = {
  currentSlide: string|null
}
const AuthEntry:React.FC<Props> = ({currentSlide}) => {
  const googleIconClass = getIconClass(currentSlide,"google")
  const facebookIconClass = getIconClass(currentSlide,"facebook")
  return (
		<div className="max-w-md mx-auto w-full flex flex-col space-y-4">
			<UIIconButton 
        iconSize={iconSize}
        textSize={textSize}
        customClass={`
          ${googleIconClass}
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
          ${facebookIconClass}
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