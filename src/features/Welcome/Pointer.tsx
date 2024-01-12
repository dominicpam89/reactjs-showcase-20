import { motion } from "framer-motion"
import UIStack from "../../UI/Layout/Stack"
import { PointerPos } from "../Welcome"

type Props = {
  pointerPos: PointerPos
}

const WelcomePointer:React.FC<Props> = ({pointerPos}) => {
	return (
		<UIStack
			centered="none"
			direction="vertical"
			spacing="sm"
			customClass={`w-full px-2 absolute bottom-2 left-0 ${pointerPos}`}
		>
			<motion.div
				layoutId="slidePointer"
				className="w-1/3 h-2 bg-primary-main-contrast/20 rounded-full"
			></motion.div>
		</UIStack>
	)
}

export default WelcomePointer
