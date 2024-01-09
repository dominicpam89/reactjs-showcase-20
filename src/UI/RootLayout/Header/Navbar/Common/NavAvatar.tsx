import { motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom";

const twClasses = {
	common: "transition-all duration-300 ease-out",
	avDef: "bg-primary-main-color/30",
	avAct: "bg-primary-main-color"
}

const NavAvatar = () => {
  const navigate = useNavigate()
	const {pathname} = useLocation()
	const isActive = pathname==="/profile"
	const commonClass = twClasses.common
	const avatarClass = isActive ? twClasses.avAct : twClasses.avDef
  return (
		<>
			<motion.button
        onClick={()=>navigate("/profile")}
				whileTap={{ scale: 0.95 }}
				className={`relative rounded-full overflow-hidden h-12 w-12 ${commonClass}`}
			>
				<img
					alt="avatar"
					src="/avatar-dummy.jpeg"
					className={`w-full h-full ${commonClass}`}
				/>
				<div className={`absolute top-0 left-0 w-full h-full mix-blend-screen ${avatarClass} ${commonClass}`}></div>
			</motion.button>
		</>
  )
}
 
export default NavAvatar;