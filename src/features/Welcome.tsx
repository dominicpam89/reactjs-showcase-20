import { useCallback, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import WelcomeSlide1 from "./Welcome/Slide1"
import WelcomeContainer from "./Welcome/Container"
import WelcomeSlide2 from "./Welcome/Slide2"
import WelcomeSlide3 from "./Welcome/Slide3"
import AuthEntry from "./Welcome/AuthEntry"
import WelcomePointer from "./Welcome/Pointer"
import { AnimatePresence, PanInfo, useDragControls } from "framer-motion"

const slides = ["1","2","3"]
enum ContainerColor{
	slide1="bg-primary-main-color text-primary-main-contrast",
	slide2="bg-neutral-100 text-neutral-900",
	slide3="bg-neutral-100 text-neutral-900"
}

const getContainerColor = (currentSlide:string|null)=>{
	let containerColor
	switch(currentSlide){
		case "1":
			containerColor = ContainerColor.slide1
			break
		case "2":
			containerColor = ContainerColor.slide2
			break
		default:
			containerColor = ContainerColor.slide3
			break
	}
	return containerColor
}

const Welcome = () => {
	// Logic
	const [searchParams, setSearchParams] = useSearchParams()
	const currentSlide = searchParams.get("slide")
	const containerCol = getContainerColor(currentSlide)
	const dragControls = useDragControls()
	const onDragEnd = useCallback((event:PointerEvent | MouseEvent | TouchEvent, info:PanInfo) => {
		event
		if (info.offset.x > 0){
			currentSlide === "1"
				? null
				: setSearchParams(`slide=${Number(currentSlide) - 1}`)
		}
		else if (info.offset.x < 0){
			currentSlide === "3"
				? null
				: setSearchParams(`slide=${Number(currentSlide) + 1}`)
		}
	},[currentSlide])
	useEffect(() => {
		if (!searchParams.get("slide")) setSearchParams(`slide=${slides[0]}`)
	}, [searchParams, setSearchParams])

	// Render
	return (
		<WelcomeContainer 
			customClass={`${containerCol}`}
			drag="x"
			dragSnapToOrigin
			dragConstraints={{ left: -2, right: 2 }}
			dragControls={dragControls}
			dragTransition={{
				min:0,
				max:100,
				bounceDamping: 9,
				bounceStiffness:100,
			}}
			onDragEnd={onDragEnd}
		>
			<AnimatePresence mode="wait">
				{currentSlide === "1" && <WelcomeSlide1 />}
				{currentSlide === "2" && <WelcomeSlide2 />}
				{currentSlide === "3" && <WelcomeSlide3 />}
			</AnimatePresence>
			{currentSlide !=="1" && <AuthEntry currentSlide={currentSlide} />}
			<WelcomePointer slides={slides} currentSlide={currentSlide} />
		</WelcomeContainer>
	)
}

export default Welcome