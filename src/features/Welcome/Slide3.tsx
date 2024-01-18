import UIStack from "../../UI/Layout/Stack"
import LoaderCubeMozaic from "../../UI/Loading/CubeMozaic"
import { motion } from "framer-motion"
import { useHookWelcomePage } from "../../data/hooks/useWelcome"
import { useAppSelector } from "../../data/store"
import { motionVar } from "./Slide3.helper"
import AuthEntry from "./AuthEntry"

type ImageData = {
	data: string | undefined
	error: Error | null
}

type LoaderErrorProps = {
	errorMessageColor: "text-warning-light-color" | "text-warning-main-color"
	imageData: ImageData
}

type ImageProps = {
	imageData: ImageData
}

const Loader = () => (
	<LoaderCubeMozaic
		$duration="normal"
		$scale={1.2}
		variants={motionVar.loader}
	/>
)

const LoaderError:React.FC<LoaderErrorProps> = ({errorMessageColor,imageData})=>{
	return (
		<motion.p
			key="error-message"
			className={errorMessageColor}
			variants={motionVar.errorMessage}
		>
			Error! {imageData.error?.message}
		</motion.p>
	)
}

const Image:React.FC<ImageProps> = ({imageData})=>{
	return (
		<motion.div
			key="image"
			aria-label="imageContainer"
			className="relative rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden shadow-2xl shadow-neutral-900/20 transition-none"
			variants={motionVar.imageContainer}
		>
			<img src={imageData.data} alt="healthy food image small resolution" />
		</motion.div>
	)
}

const Description = ()=>{
	return (
		<motion.div
			className="welcome_description"
			variants={motionVar.description}
		>
			<h3 className="text-lg md:text-2xl font-black text-center uppercase tracking-wider">Lorem Ipsum</h3>
			<p className="text-center text-xs md:text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
				inventore recusandae alias sint.
			</p>
		</motion.div>
	)
}

const WelcomeSlide3 = () => {
	const { imageState, imageData } = useHookWelcomePage("slide-3","sm")
	const {colorTheme} = useAppSelector(state=>state.theme)
	const errorMessageColor =
		colorTheme === "theme-dark"
			? "text-warning-light-color"
			: "text-warning-main-color"
	return (
		<UIStack
			key="slide-2-container"
			centered="all"
			variants={motionVar.stack}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{imageState.isLoading && <Loader />}
			{imageState.isError && (
				<LoaderError
					errorMessageColor={errorMessageColor}
					imageData={imageData}
				/>
			)}
			<UIStack key="content" direction="horizontal" spacing="lg">
				{imageState.isSuccess && (
					<>
						<Image imageData={imageData} />
						<Description />
						<AuthEntry />
					</>
				)}
			</UIStack>
		</UIStack>
	)
}

export default WelcomeSlide3
