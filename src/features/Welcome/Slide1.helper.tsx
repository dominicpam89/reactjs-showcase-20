import { Variants } from "framer-motion"

export type MotionVar = {
	container: Variants
	logo: Variants
	text: Variants
	description: Variants
}

export const motionVar: MotionVar = {
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
	description: {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 0.8,
			x: 0,
			transition: { delay: 0.64, duration: 0.96 },
		},
	},
}