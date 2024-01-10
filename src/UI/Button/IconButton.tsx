import UIReactIcon from "../ReactIcon"
import { motion, HTMLMotionProps } from "framer-motion"

type IconSize<T extends string> = T | Omit<string, "w-5 h-5">
type TextSize<T extends string> = T | Omit<string, "text-sm">

interface PropsButton extends HTMLMotionProps<"button"> {
	icon: React.ReactNode
	iconSize?: IconSize<"w-5 h-5">
	text?: string
	textPos?: "left"|"right"
	textSize?: TextSize<"text-sm">
	customClass?: string
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	iconSize="w-5 h-5",
	text="",
	textPos="left",
	textSize="text-sm",
	customClass = "",
	...defaultProps
}) => {
	return (
		<motion.button
			{...defaultProps}
			className={`flex space-x-3 items-center justify-center transition-none ${customClass}`}
			whileTap={{
				scale: 0.9,
			}}
			whileHover={{
				scale: 1.1,
			}}
		>
			{textPos === "left" && <div className={`${textSize}`}>{text}</div>}
			<div className={`${iconSize}`}>
				<UIReactIcon icon={icon} className="w-full h-full" />
			</div>
			{textPos === "right" && <div className={`${textSize}`}>{text}</div>}
		</motion.button>
	)
}

export default UIIconButton
