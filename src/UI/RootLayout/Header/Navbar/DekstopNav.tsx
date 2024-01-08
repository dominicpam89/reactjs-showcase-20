import { TypeLinks } from "../Navbar";
import LinkItem from "./DesktopNav/LinkItem";
import HeaderThemeToggle from "./Common/ThemeToggle";
import { motion } from "framer-motion"

type Props = {
  links: TypeLinks[]
}

const DesktopNav:React.FC<Props> = ({links}) => {
  return (
		<motion.div
			id="nav-desktop"
			className="flex items-center space-x-4 lg:space-x-6"
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
		</motion.div>
  )
}
 
export default DesktopNav;