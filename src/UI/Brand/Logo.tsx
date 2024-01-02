import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"div"> {}

const twClasses = {
	size: "h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-52 xl:w-52",
}

const UIBrandLogo: React.FC<Props> = ({ ...defaultProps }) => {
	return (
		<>
			<motion.div
				{...defaultProps}
				id="logo"
				className={`${twClasses.size}`}
			>
				<img
					alt="Foodsy Logo"
					src="/logo/logo-primary-sm.png"
					className="h-full w-full"
				/>
			</motion.div>
		</>
	)
}

export default UIBrandLogo
