import LinkItem from "./DesktopNav/LinkItem"
import { motion } from "framer-motion"
import HeaderThemeToggle from "./Common/ThemeToggle"
import NavAvatar from "./Common/NavAvatar"
import NavChart from "./Common/NavCart"
import { TypeLinks } from "../../../data/utils/navlink"

type Props = {
	links: TypeLinks[]
}

const DesktopNav: React.FC<Props> = ({ links }) => {
	return (
		<motion.div
			id="nav-desktop"
			className="flex items-center space-x-6 lg:space-x-8"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<HeaderThemeToggle />
			<ul className="justify-center flex space-x-4 lg:space-x-8">
				{links.map((link) => (
					<LinkItem key={link.link} link={link} />
				))}
			</ul>
			<NavChart />
			<NavAvatar />
		</motion.div>
	)
}

export default DesktopNav
