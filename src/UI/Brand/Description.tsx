import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"p">{
	customClass?: string
}

const twClasses = {
	default: "transition-none"
}

const UIBrandDescription:React.FC<Props> = ({customClass="", ...defaultProps}) => {
	return (
		<motion.p
			{...defaultProps}
			className={`${twClasses.default} py-6 sm:px-[15%] md:px-[30%] text-sm text-justify break-words hyphens-auto opacity-80 ${customClass}`}
		>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
			corporis ad quod doloremque neque accusantium molestiae repellat quam
			tenetur nihil at illo, impedit assumenda porro rem aliquam amet eum
			eaque?
		</motion.p>
  )
}
 
export default UIBrandDescription;