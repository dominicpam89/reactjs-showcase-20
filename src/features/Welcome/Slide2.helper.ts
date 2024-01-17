import { Variants } from "framer-motion"

export type MotionVar = {
	stack: Variants
	loader: Variants
	errorMessage: Variants
	imageContainer: Variants
	description: Variants
}

export const motionVar: MotionVar = {
	stack: {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { when: "beforeChildren" } },
	},
	loader: {
		hidden: { opacity: 0, transition: { duration: 0.48 } },
		visible: { opacity: 1, transition: { duration: 0.48 } },
	},
	errorMessage: {
		hidden: { opacity: 0, transition: { duration: 0.64 } },
		visible: { opacity: 1, transition: { duration: 0.64 } },
	},
	imageContainer: {
		hidden: { opacity: 0, scale: 0.2, rotateZ: -60 },
		visible: {
			opacity: 1,
			scale: 1,
			rotateZ: 0,
			transition: { delay: 0.32, duration: 0.64 },
		},
	},
	description:{
		hidden: {opacity:0, y:10},
		visible:{
			opacity:1,
			y:0,
			transition:{delay:0.64, duration:0.64}
		}
	}
}