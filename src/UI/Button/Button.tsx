import { HTMLMotionProps, motion } from "framer-motion"

type BtnType = "contained" | "outlined" | "text"
type ColorSystem =
	| "primary"
	| "secondary"
	| "info"
	| "warning"
	| "danger"
	| "success"
	| "none"
type Size = "xs" | "sm" | "md" | "lg" | "xl"
type Roundness = "none" | "sm" | "md" | "lg" | "full"
type Shadow = "none" | "light" | "dark"

interface Props extends HTMLMotionProps<"button"> {
	$type?: BtnType
	$color?: ColorSystem
	$size?: Size
	$roundness?: Roundness
	$shadow?: Shadow
	$fullWidth?: boolean
	customClass?: string
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

const getColorClass = (type: BtnType, color: ColorSystem) => {
	let twClass
	if (type === "contained") {
		switch (color) {
			case "primary":
				twClass = "bg-primary-main-color text-primary-main-contrast"
				break
			case "secondary":
				twClass = "bg-secondary-main-color text-secondary-main-contrast"
				break
			case "info":
				twClass = "bg-info-main-color text-info-main-contrast"
				break
			case "warning":
				twClass = "bg-warning-main-color text-warning-main-contrast"
				break
			case "danger":
				twClass = "bg-danger-main-color text-danger-main-contrast"
				break
			case "success":
				twClass = "bg-success-main-color text-success-main-contrast"
				break
			default:
				twClass = "text-inherit"
				break
		}
	} else if (type === "outlined") {
		switch (color) {
			case "primary":
				twClass = "border border-primary-main-color text-primary-main-color"
				break
			case "secondary":
				twClass =
					"border border-secondary-main-color text-secondary-main-color"
				break
			case "info":
				twClass = "border border-info-main-color text-info-main-color"
				break
			case "warning":
				twClass = "border border-warning-main-color text-warning-main-color"
				break
			case "danger":
				twClass = "border border-danger-main-color text-danger-main-color"
				break
			case "success":
				twClass = "border border-success-main-color text-success-main-color"
				break
			default:
				twClass = "text-inherit"
				break
		}
	}
	else{
		switch (color) {
			case "primary":
				twClass = "text-primary-main-color"
				break
			case "secondary":
				twClass =
					"text-secondary-main-color"
				break
			case "info":
				twClass = "text-info-main-color"
				break
			case "warning":
				twClass = "text-warning-main-color"
				break
			case "danger":
				twClass = "text-danger-main-color"
				break
			case "success":
				twClass = "text-success-main-color"
				break
			default:
				twClass = "text-inherit"
				break
		}
	}
	return twClass
}

const UIButton: React.FC<Props> = ({
	children,
	$type = "contained",
	$color = "primary",
	$size = "sm",
	$roundness = "md",
	$shadow = "none",
	$fullWidth = false,
	customClass = "",
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
			? getColorClass("contained", $color)
			: $type === "outlined"
			? getColorClass("outlined", $color)
			: getColorClass("text", $color)
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
	const shadowClass =
		$shadow === "dark"
			? "shadow-md shadow-gray-900/10"
			: $shadow === "light"
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
      ${customClass}
    `}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.96 }}
		>
			{children}
		</motion.button>
	)
}

export default UIButton
