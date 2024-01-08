import MobileNav from "./Navbar/MobileNav"
import DesktopNav from "./Navbar/DekstopNav"
import { useMediaQuery } from "../../../data/hooks/useMediaQuery"
import { AnimatePresence } from "framer-motion"

export type TypeLinks = {
	link: string
	text: string
}

const links: TypeLinks[] = [
	{ link: "/home", text: "Home" },
	{ link: "/profile", text: "Profile" },
	{ link: "/settings", text: "Settings" },
]

const HeaderNav = () => {
	const screenMd = useMediaQuery(`(min-width:768px)`)
	return (
		<>
			<AnimatePresence mode="wait">
				{screenMd && <DesktopNav key="desktopNav" links={links} />} 
				{!screenMd && <MobileNav key="mobileNav" links={links} />}
			</AnimatePresence>
		</>
	)
}

export default HeaderNav
