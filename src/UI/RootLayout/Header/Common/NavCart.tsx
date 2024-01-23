import UIReactIcon from "../../../ReactIcon"
import { FaCartShopping } from "react-icons/fa6"
import { AnimatePresence, motion } from "framer-motion"
import useNavCart from "../../../../data/hooks/useNavCart"

const NavChart = () => {
	const { navigate, commonClass, highlightClass, iconClass, isActive } =
		useNavCart()
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className={`relative h-5 w-5 ${commonClass}`}
			onClick={() => navigate("/cart")}
		>
			<AnimatePresence>
				{isActive && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration:0.66,
						}}
						className={`
					absolute -top-[50%] -left-[50%] 
					w-[200%] h-[200%] border rounded-full 
					transition-none ${highlightClass}`}
					></motion.div>
				)}
			</AnimatePresence>
			<div
				className={`
					absolute -top-[80%] left-[50%] w-[110%] h-[110%] 
					rounded-full flex items-center justify-center 
					bg-danger-main-color text-danger-main-contrast ${commonClass}`}
			>
				3
			</div>
			<UIReactIcon
				icon={<FaCartShopping />}
				className={`h-full w-full ${iconClass} ${commonClass}`}
			/>
		</motion.button>
	)
}

export default NavChart
