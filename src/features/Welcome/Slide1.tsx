import { Variants } from "framer-motion"
import UIBrandLogo from "../../UI/Brand/Logo"
import UIBrandText from "../../UI/Brand/Text"
import UIBrandDescription from "../../UI/Brand/Description"
import UIStack from "../../UI/Layout/Stack"

type MotionVar = {
	container: Variants
  logo: Variants
  text: Variants
	description: Variants
}

const motionVar:MotionVar = {
	container: {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { when: "beforeChildren" } },
	},
  logo: {
		hidden: { opacity: 0, y: -30, transition: { duration: 0.32 } },
		visible: { opacity: 1, y: 0, transition: { duration: 0.64 } },
		inView: {
			rotateZ: [0, 360, 360, 360, 0],
			opacity: [0.8, 1, 1, 1, 0.8],
			transition: {
				repeat: Infinity,
				duration: 3.6,
				ease: "circInOut",
			},
		},
	},
	text: {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 0.8, y: 0, transition: { duration: 0.64 } },
	},
	description:{
		hidden: {opacity:0, x:50},
		visible: {opacity:0.8, x:0, transition:{ delay: 0.64, duration: 0.96 }}
	}
}

const WelcomeSlide1 = () => {
	return (
		<>
			<UIStack
				centered="all"
				variants={motionVar.container}
				initial="hidden"
				animate="visible"
				exit="hidden"
				whileInView="inView"
				customClass={`
						space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10
						max-w-md mx-auto
					`}
			>
				<UIBrandLogo
					variants={motionVar.logo}
					initial="hidden"
					animate="visible"
					exit="visible"
					whileInView="inView"
				/>
				<UIBrandText
					variants={motionVar.text}
					initial="hidden"
					animate="visible"
					exit="visible"
				/>
				<UIBrandDescription
					variants={motionVar.description}
					initial="hidden"
					animate="visible"
					exit="visible"
				/>
			</UIStack>
		</>
	)
}

export default WelcomeSlide1
