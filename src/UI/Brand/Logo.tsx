import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"div"> {
	src?: string
	customClass?: string
}

const twClasses = {
	default: "transition-none",
	size: "h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-52 xl:w-52",
}

const UIBrandLogo: React.FC<Props> = ({ customClass="", src="/logo/logo-primary-sm.png", ...defaultProps }) => {
	return (
		<>
			<motion.div
				{...defaultProps}
				id="logo"
				className={`${twClasses.default} ${twClasses.size} ${customClass}`}
			>
				<img alt="Foodsy Logo" src={src} className="h-full w-full" />
			</motion.div>
		</>
	)
}

export default UIBrandLogo
