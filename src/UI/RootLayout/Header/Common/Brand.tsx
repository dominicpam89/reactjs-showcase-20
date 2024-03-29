import { AnimatePresence, Variants, motion } from "framer-motion"
import { useAppSelector } from "../../../../data/store"
import UIStack from "../../../Layout/Stack"
import { useNavigate } from "react-router-dom"

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
	const navigate = useNavigate()
	const attrs = {
		alt: "foodsy logo",
		height: size,
		width: size,
		className: "hover:cursor-pointer transition-none",
		onClick:()=>navigate("/"),
		initial: "hidden",
		animate: "visible",
		exit: "hidden",
		whileTap:{scale:0.8, transition:{duration:0.24}}
	}
	return (
		<UIStack
			id="header-brand"
			centered="none"
			direction="vertical"
			customClass="w-full"
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
