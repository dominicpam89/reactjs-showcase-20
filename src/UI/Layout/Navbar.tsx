import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../data/store"
import { themeActions } from "../../data/store/theme"

const UINavbar = () => {
	const { colorTheme, fontTheme } = useAppSelector((state) => state.theme)
	const dispatch = useAppDispatch()
	const onChangeTheme = () => {
		colorTheme === "theme-dark"
			? dispatch(themeActions.changeThemeColor("theme-light"))
			: dispatch(themeActions.changeThemeColor("theme-dark"))
		fontTheme === "font-theme-primary"
			? dispatch(themeActions.changeThemeFonts("font-theme-secondary"))
			: dispatch(themeActions.changeThemeFonts("font-theme-primary"))
	}
	return (
		<div id="navbar" className="bg-neutral-100 text-neutral-800">
			<button onClick={onChangeTheme}>Change Theme</button>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/profile">Profile</Link></li>
				<li><Link to="/settings">Settings</Link></li>
				<li><Link to="/auth">Auth</Link></li>
			</ul>
		</div>
	)
}

export default UINavbar
