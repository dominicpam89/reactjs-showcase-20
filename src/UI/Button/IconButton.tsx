import UIReactIcon from "../ReactIcon"
import { motion, HTMLMotionProps } from "framer-motion"

type Size = "sm"|"md"|"lg"
type SizeType = "text"|"icon"

enum EnIconSize{
	sm="w-4 h-4",
	md="w-8 h-8",
	lg="w-16 h-16"
}

enum EnTextSize{
	sm="text-sm",
	md="text-lg",
	lg="text-2xl"
}

const getSize = (size:Size, type:SizeType)=>{
	let iconSize, textSize
	switch(size){
		case "sm":
			iconSize=EnIconSize.sm
			textSize=EnTextSize.sm
			break
		case "md":
			iconSize=EnIconSize.md
			textSize=EnTextSize.md
			break
		default:
			iconSize=EnIconSize.lg
			textSize=EnTextSize.lg
			break
	}
	if(type==="icon") return iconSize
	else return textSize
}

interface PropsButton extends HTMLMotionProps<"button"> {
	icon: React.ReactNode
	size: Size
	text?: string
	textPos?: "left"|"right"
	colorTwClass?: string
	customClass?: string
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	size="sm",
	text="",
	textPos="left",
	colorTwClass = "inherit",
	customClass = "",
	...defaultProps
}) => {
	const iconSize = getSize(size, "icon")
	const textSize = getSize(size, "text")
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
			{textPos==="left" && <div className={textSize}>{text}</div>}
			<div className={iconSize}><UIReactIcon icon={icon} className="w-full h-full" /></div>
			{textPos==="right" && <div className={textSize}>{text}</div>}
		</motion.button>
	)
}

export default UIIconButton
