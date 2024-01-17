import UIBrandLogo from "../../UI/Brand/Logo"
import UIBrandText from "../../UI/Brand/Text"
import UIBrandDescription from "../../UI/Brand/Description"
import UIStack from "../../UI/Layout/Stack"
import { motionVar } from "./Slide1.helper"

const WelcomeSlide1 = () => {
	return (
		<UIStack
			key="slide-1-container"
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
	)
}

export default WelcomeSlide1
