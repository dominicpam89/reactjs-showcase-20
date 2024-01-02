import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"h1" | "h2"> {
	weight?: "light" | "normal" | "bold" | "extrabold"
	customClass?: string
}

const twClasses = {
	weight: {
		light: "font-light",
		normal: "font-normal",
		bold: "font-bold",
		extrabold: "font-extrabold",
	},
	size: "text-lg md:text-xl lg:text-3xl xl:text-6xl"
}

const UIBrandText: React.FC<Props> = ({
	weight = "extrabold",
	customClass = "uppercase tracking-widest",
	...defaultProps
}) => {
	const _weight =
		weight === "extrabold"
			? twClasses.weight.extrabold
			: weight === "bold"
			? twClasses.weight.bold
			: weight === "normal"
			? twClasses.weight.normal
			: twClasses.weight.light
	return (
		<>
			<motion.h1 {...defaultProps} className={`${_weight} ${twClasses.size} ${customClass}`}>
				{import.meta.env.VITE_APP_NAME}
			</motion.h1>
		</>
	)
}

export default UIBrandText
