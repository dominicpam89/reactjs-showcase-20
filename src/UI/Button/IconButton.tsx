import UIReactIcon from "../ReactIcon"
import { motion, HTMLMotionProps } from "framer-motion"

interface PropsButton extends HTMLMotionProps<"button"> {
	icon: React.ReactNode
	text?: string
	textPos?: "left"|"right"
	colorTwClass?: string
	customClass?: string
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	text="",
	textPos="left",
	colorTwClass = "inherit",
	customClass = "",
	...defaultProps
}) => {
	return (
		<motion.button
			{...defaultProps}
			className={`flex space-x-1 items-center transition-none ${colorTwClass} ${customClass}`}
			whileTap={{
				scale: 0.9,
			}}
			whileHover={{
				scale: 1.1,
			}}
		>
			{textPos==="left" && <span>{text}</span>}
			<UIReactIcon icon={icon} className="w-full h-full" />
			{textPos==="right" && <span>{text}</span>}
		</motion.button>
	)
}

export default UIIconButton
