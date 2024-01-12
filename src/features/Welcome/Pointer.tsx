import { motion } from "framer-motion"
import UIStack from "../../UI/Layout/Stack"

type Props = {
	slides: string[]
	currentSlide: string | null
}

const WelcomePointer:React.FC<Props> = ({slides,currentSlide})=> {
	return (
		<UIStack
			centered="none"
			direction="vertical"
			spacing="sm"
			customClass={`w-full px-2 absolute bottom-2 left-0`}
		>
			{slides.map((slide) => {
				return (
					<motion.div
						key={slide}
						className={`w-1/3 h-2 rounded-full ${
							slide === currentSlide 
								? "bg-primary-main-contrast/80"
								: "bg-primary-main-contrast/20"
						}`}
						animate={{opacity:[0,1,1], y:[50,25,0]}}
					></motion.div>
				)
			})}
		</UIStack>
	)
}

export default WelcomePointer
