import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { TypeThemeColors } from "../store/theme";

const twClasses = (themeCol: TypeThemeColors) => ({
	icon: {
		default: "text-inherit",
		active:
			themeCol === "theme-dark"
				? "text-primary-light-color"
				: "text-primary-main-color",
	},
	highlight: {
		default: "",
		active:
			themeCol === "theme-dark"
				? "border-primary-light-color/50"
				: "border-primary-dark-color/50",
	},
	common: "transition-all duration-200 ease-out",
})

const useNavCart = ()=>{
  const {colorTheme} = useAppSelector(state=>state.theme)
	const {pathname} = useLocation()
	const navigate = useNavigate()
	const isActive = pathname==="/cart"
	const commonClass = twClasses(colorTheme).common
	const iconClass = isActive
		? twClasses(colorTheme).icon.active
		: twClasses(colorTheme).icon.default
	const highlightClass = isActive
		? twClasses(colorTheme).highlight.active
		: twClasses(colorTheme).highlight.default
  return {
    isActive,
		commonClass,
		iconClass,
		highlightClass,
		navigate,
  }
}

export default useNavCart