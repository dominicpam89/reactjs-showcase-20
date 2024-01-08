import { useAppSelector } from "../../../../../data/store"
import { Link, useLocation } from "react-router-dom"
// import { AnimatePresence, motion } from "framer-motion"

type TypeLink = {
	link: string
	text: string
}
type Props = {
	link: TypeLink
}

// color system
const twClasses = {
	light:{
		linkSelected: "text-primary-main-color",
		underline: "bg-primary-main-color",
	},
	dark:{
		linkSelected: "text-primary-light-color",
		underline: "bg-primary-light-color",
	}
}

const LinkItem: React.FC<Props> = ({ link }) => {
	const { pathname } = useLocation()
	const { colorTheme } = useAppSelector(state=>state.theme)
	let linkColor=""
	let underlineColor=""
	if(pathname===link.link){
		linkColor = colorTheme==="theme-dark" ? twClasses.dark.linkSelected : twClasses.light.linkSelected
		underlineColor =
			colorTheme === "theme-dark"
				? twClasses.dark.underline
				: twClasses.dark.underline
	}
	return (
		<li key={link.link} className="relative">
			<Link to={link.link} className={`font-heading ${linkColor}`}>
				{link.text}
			</Link>
				{/* {pathname === link.link && (
					<motion.span
						layoutId="highlight"
						className={`absolute -bottom-1 left-0 w-[40%] ml-[30%] h-[2px] rounded-full transition-none ${underlineColor}`}
					></motion.span>
				)} */}
		</li>
	)
}

export default LinkItem
