import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"p">{
	customClass?: string
}

const UIBrandDescription:React.FC<Props> = ({customClass="", ...defaultProps}) => {
	return (
		<motion.p
			{...defaultProps}
			className={`welcome_description ${customClass}`}
		>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
			corporis ad quod doloremque neque accusantium molestiae repellat quam
			tenetur nihil at illo, impedit assumenda porro rem aliquam amet eum
			eaque?
		</motion.p>
  )
}
 
export default UIBrandDescription;