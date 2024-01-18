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
		visible: { opacity: 1, transition: { when: "beforeChildren", duration:0.24 } },
	},
	loader: {
		hidden: { opacity: 0, transition: { duration: 0.36 } },
		visible: { opacity: 1, transition: { duration: 0.36 } },
	},
	errorMessage: {
		hidden: { opacity: 0, transition: { duration: 0.48 } },
		visible: { opacity: 1, transition: { duration: 0.48 } },
	},
	imageContainer: {
		hidden: { opacity: 0, scale: 0.2, rotateZ: -60 },
		visible: {
			opacity: 1,
			scale: 1,
			rotateZ: 0,
			transition: { delay: 0.24, duration: 0.48 },
		},
	},
	description:{
		hidden: {opacity:0, y:10},
		visible:{
			opacity:1,
			y:0,
			transition:{delay:0.48, duration:0.48}
		}
	}
}