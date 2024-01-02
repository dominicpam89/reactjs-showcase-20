import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"div"> {
	centered?: boolean
	padding?: "sm" | "md" | "lg"
	color?: "primary" | "secondary" | "default"
	customClass?: string
}

const twClasses = {
	default: "min-h-screen w-full flex",
	color: {
		primary: "bg-primary-main-color text-primary-main-contrast",
		secondary: "bg-secondary-main-color text-secondary-main-contrast",
		default: "bg-neutral-100 text-neutral-800",
	},
	centered: {
		true: "justify-center items-center",
		false: "justify-center",
	},
	padding: {
		sm: "p-8",
		md: "p-14",
		lg: "p-24",
	},
}

const UIContainer: React.FC<Props> = ({
	children,
	centered = true,
	color = "default",
	padding = "md",
	customClass="",
	...defaultProps
}) => {
	// centered
	const _centered = centered
		? twClasses.centered.true
		: twClasses.centered.false
	
	// color
	const _color = color==="default"
	? twClasses.color.default
	: color==="primary"
	? twClasses.color.primary
	: twClasses.color.secondary

	// padding
	const _padding =
		padding === "sm"
			? twClasses.padding.sm
			: padding === "md"
			? twClasses.padding.md
			: twClasses.padding.lg
	return (
		<motion.div
			{...defaultProps}
			className={`${twClasses.default} ${_centered} ${_color} ${_padding} ${customClass}`}
		>
			{children}
		</motion.div>
	)
}

export default UIContainer
