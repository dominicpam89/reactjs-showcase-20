import { HTMLMotionProps, motion } from "framer-motion"

type BtnType = "contained" | "outlined" | "text"
type ColorSystem =
	| "primary"
	| "secondary"
	| "info"
	| "warning"
	| "danger"
	| "success"
type Size = "xs" | "sm" | "md" | "lg" | "xl"
type Roundness = "none" | "sm" | "md" | "lg" | "full"
type Shadow = "none"|"light"|"dark"

interface Props extends HTMLMotionProps<"button"> {
	$type?: BtnType
	$color?: ColorSystem
	$size?: Size
	$roundness?: Roundness
	$shadow?: Shadow
	$fullWidth?: boolean
	$customClass?: string
}

const twClasses = {
	fullwidth: "w-full",
	size: {
		xs: "py-1 px-2 text-xs",
		sm: "py-2 px-3 text-sm",
		md: "py-3 px-4 text-base",
		lg: "py-4 px-6 text-lg",
		xl: "py-5 px-7 text-xl",
	},
	roundness: {
		none: "",
		sm: "rounded-sm",
		md: "rounded-md",
		lg: "rounded-lg",
		full: "rounded-full",
	},
}

const TestButtonSystem: React.FC<Props> = ({
	children,
	$type = "contained",
	$color = "primary",
	$size = "sm",
	$roundness = "md",
	$shadow = "none",
	$fullWidth = false,
	$customClass = "",
	...defaultProps
}) => {
	const widthClass = $fullWidth ? twClasses.fullwidth : ""
	const sizeClass =
		$size === "xs"
			? twClasses.size.xs
			: $size === "sm"
			? twClasses.size.sm
			: $size === "md"
			? twClasses.size.md
			: $size === "lg"
			? twClasses.size.lg
			: twClasses.size.xl
	const colorClass =
		$type === "contained"
			? `bg-${$color}-main-color text-${$color}-main-contrast`
			: $type === "outlined"
			? `border border-${$color}-main-color text-${$color}-main-color`
			: `text-${$color}-main-color`
	const roundnessClass =
		$roundness === "sm"
			? twClasses.roundness.sm
			: $roundness === "md"
			? twClasses.roundness.md
			: $roundness === "lg"
			? twClasses.roundness.lg
			: $roundness === "full"
			? twClasses.roundness.full
			: twClasses.roundness.none
	const shadowClass = $shadow==="dark"
	? "shadow-md shadow-gray-900/10"
	: $shadow==="light"
	? "shadow-md shadow-gray-100/10"
	: ""
	return (
		<motion.button
			{...defaultProps}
			className={`
			transition-none
      ${widthClass}
      ${sizeClass}
      ${colorClass}
      ${roundnessClass}
			${shadowClass}
      ${$customClass}
    `}
			whileHover={{scale:1.05}}
			whileTap={{scale:0.95}}
		>
			{children}
		</motion.button>
	)
}

export default TestButtonSystem
