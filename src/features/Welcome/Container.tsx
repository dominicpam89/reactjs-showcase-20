import { HTMLMotionProps, motion } from "framer-motion"

interface Props extends HTMLMotionProps<"div">{
  customClass?: string
}

const WelcomeContainer:React.FC<Props> = ({children, customClass="", ...defaultProps}) => {
  return (
		<motion.div {...defaultProps} className={`
      relative min-h-screen w-full
      flex flex-col justify-center 
      px-12 sm:px-24 md:px-52 lg:px-72
      py-4 sm:py-8 md:py-12 lg:py-24
      space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10
      ${customClass}  
    `}>
        {children}
		</motion.div>
  )
}
 
export default WelcomeContainer;