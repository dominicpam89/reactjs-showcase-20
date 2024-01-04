import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import AuthContainer from "./Auth/AuthContainer"
import UIStack from "../UI/Layout/Stack"
import UIBrandLogo from "../UI/Brand/Logo"
import UIBrandText from "../UI/Brand/Text"
import { Variants } from "framer-motion"

type MotionVar = {
	container: Variants
	logo: Variants
	text: Variants
}
const motionVar: MotionVar = {
	container: {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { when: "beforeChildren" } },
		inView: {},
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
}

const slides = ["1","2","3"]

const Auth = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	useEffect(()=>{
		if(!searchParams.get("slide")) setSearchParams(`slide=${slides[0]}`)
	},[searchParams, setSearchParams])
	return (
		<>
			<AuthContainer>
				<UIStack
					centered="all"
					customClass="mt-[30vh]"
					variants={motionVar.container}
					initial="hidden"
					animate="visible"
					exit="hidden"
					whileInView="inView"
				>
					<UIBrandLogo variants={motionVar.logo} />
					<UIBrandText variants={motionVar.text} />
				</UIStack>
				<UIStack direction="vertical" spacing="sm" customClass="w-full px-2 absolute bottom-2 left-0">
					<div className="w-full h-3 bg-primary-main-contrast"></div>
					<div className="w-full h-3 bg-primary-main-contrast"></div>
					<div className="w-full h-3 bg-primary-main-contrast"></div>
				</UIStack>
			</AuthContainer>
		</>
	)
}

export default Auth
