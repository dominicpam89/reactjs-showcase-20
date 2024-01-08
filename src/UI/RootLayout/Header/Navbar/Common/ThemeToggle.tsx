import { useAppSelector, useAppDispatch } from "../../../../../data/store"
import { themeActions } from "../../../../../data/store/theme"
import { motion } from "framer-motion"

const twClasses = {
	container: "relative h-8 w-14 p-2 rounded-full border cursor-pointer",
	pointer: {
		default: "absolute w-4 h-4 rounded-full transition-none",
		toggle: {
			dark: "left-2",
			light: "right-2"
		}
	},
}
// Component
type Props = {
	navType?: "desktop"|"mobile"
}
const HeaderThemeToggle:React.FC<Props> = ({navType="desktop"}) => {
	const {colorTheme} = useAppSelector(state=>state.theme)
  const themeDispatch = useAppDispatch()
  const onChangeTheme = () => {
		colorTheme === "theme-dark"
			? themeDispatch(themeActions.changeThemeColor("theme-light"))
			: themeDispatch(themeActions.changeThemeColor("theme-dark"))
	}
	const colorContainer = navType==="desktop" ? "border-neutral-800/50" : "border-neutral-50"
	const colorToggle = navType==="desktop" ? "bg-neutral-800":"bg-neutral-100"
	const pointerToggle = colorTheme==="theme-dark" ? twClasses.pointer.toggle.dark : twClasses.pointer.toggle.light
  return (
		<div
			aria-label="container"
			onClick={onChangeTheme}
			className={`${twClasses.container} ${colorContainer}`}
		>
			<motion.div
				layout
				transition={{ type: "spring", duration: 1.2, bounce: 0.36 }}
				className={`${twClasses.pointer.default} ${colorToggle} ${pointerToggle}`}
			></motion.div>
		</div>
	)
}

export default HeaderThemeToggle
