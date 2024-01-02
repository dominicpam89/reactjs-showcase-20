import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"h1"|"h2"> {}

const UIBrandText: React.FC<Props> = ({ ...defaultProps }) => {
	return (
		<>
			<motion.h1
				{...defaultProps}
				className=""
			>
				{import.meta.env.VITE_APP_NAME}
			</motion.h1>
		</>
	)
}

export default UIBrandText
