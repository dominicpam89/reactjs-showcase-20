import { AnimatePresence, Variants, motion } from "framer-motion"
import { useAppSelector } from "../../../../data/store"
import UIStack from "../../../Layout/Stack"

type Props = {
	size?: `${number}px`
}

const motionVar: Variants = {
	hidden: {
		scale: 0.5,
		rotateZ: -360,
		opacity: 0.25,
		transition: {
			duration: 0.24,
		},
	},
	visible: {
		scale: 1,
		rotateZ: 0,
		opacity: 1,
		transition: {
			duration: 0.36,
			ease: "circInOut",
		},
	},
}

const HeaderBrand: React.FC<Props> = ({ size = 48 }) => {
	const { colorTheme } = useAppSelector((state) => state.theme)
	const attrs = {
		alt: "foodsy logo",
		height: size,
		width: size,
		className: "transition-none",
		initial: "hidden",
		animate: "visible",
		exit: "hidden",
	}
	return (
		<UIStack
			id="header-left"
			centered="none"
			direction="vertical"
			customClass="w-full flex-grow-0 justify-start"
		>
			<AnimatePresence mode="wait">
				{colorTheme === "theme-dark" && (
					<motion.img
						key="brand-dark"
						src="/logo/logo-primary-invert-sm.png"
						variants={motionVar}
						{...attrs}
					/>
				)}
				{colorTheme === "theme-light" && (
					<motion.img
						key="brand-light"
						src="/logo/logo-primary-sm.png"
						variants={motionVar}
						{...attrs}
					/>
				)}
			</AnimatePresence>
		</UIStack>
	)
}

export default HeaderBrand
