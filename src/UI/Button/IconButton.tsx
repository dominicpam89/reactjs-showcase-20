import UIReactIcon from "../ReactIcon"
import { motion, HTMLMotionProps } from "framer-motion"

interface PropsButton extends HTMLMotionProps<"button"> {
	icon: React.ReactNode
	text?: string
	colorTwClass?: string
	customClass?: string
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	text="",
	colorTwClass = "inherit",
	customClass = "",
	...defaultProps
}) => {
	return (
		<motion.button
			{...defaultProps}
			className={`flex space-x-1 items-center transition-none ${colorTwClass} ${customClass}`}
			whileTap={{
				scale: 0.95,
			}}
			whileHover={{
				scale: 1.1,
			}}
		>
			<UIReactIcon icon={icon} className="w-full h-full" />
			<span>{text}</span>
		</motion.button>
	)
}

export default UIIconButton
