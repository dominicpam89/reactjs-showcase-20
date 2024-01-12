import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import WelcomeSlide1 from "./Welcome/Slide1"
import WelcomeContainer from "./Welcome/Container"
import WelcomeSlide2 from "./Welcome/Slide2"
import WelcomeSlide3 from "./Welcome/Slide3"
import AuthEntry from "./Welcome/AuthEntry"
import WelcomePointer from "./Welcome/Pointer"

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
	const [searchParams, setSearchParams] = useSearchParams()
	const currentSlide = searchParams.get("slide")
	const containerCol = getContainerColor(currentSlide)
	useEffect(() => {
		if (!searchParams.get("slide")) setSearchParams(`slide=${slides[0]}`)
	}, [searchParams, setSearchParams])
	return (
		<WelcomeContainer customClass={`${containerCol}`}>
			{currentSlide === "1" && <WelcomeSlide1 />}
			{currentSlide === "2" && <WelcomeSlide2 />}
			{currentSlide === "3" && <WelcomeSlide3 />}
			<AuthEntry />
			<WelcomePointer slides={slides} currentSlide={currentSlide} />
		</WelcomeContainer>
	)
}

export default Welcome