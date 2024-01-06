import { useAppSelector, useAppDispatch } from "../../../../data/store"
import { themeActions } from "../../../../data/store/theme"
import { motion } from "framer-motion"

const HeaderThemeToggle = () => {
	const {colorTheme} = useAppSelector(state=>state.theme)
  const themeDispatch = useAppDispatch()
  const onChangeTheme = () => {
		colorTheme === "theme-dark"
			? themeDispatch(themeActions.changeThemeColor("theme-light"))
			: themeDispatch(themeActions.changeThemeColor("theme-dark"))
	}
  return (
		<div
			onClick={onChangeTheme}
			className="flex h-8 w-14 p-2 rounded-full border border-neutral-800/40 cursor-pointer"
			style={{
				justifyContent:
					colorTheme === "theme-dark" ? "flex-start" : "flex-end",
			}}
		>
			<motion.div
				layout
				transition={{ type: "spring", duration: 1.2, bounce: 0.36 }}
				className="w-4 bg-neutral-800 rounded-full transition-none"
			></motion.div>
		</div>
	)
}

export default HeaderThemeToggle
