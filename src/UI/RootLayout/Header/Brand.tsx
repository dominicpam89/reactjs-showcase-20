import { AnimatePresence, Variants, motion } from "framer-motion"
import { useAppSelector } from "../../../data/store"

type Props = {
	size?: `${number}px`
}

const motionVar:Variants = {
  hidden: {
    scale: 0,
    rotateZ: 360,
    opacity: 0.3,
    transition:{
      duration:0.12,
    }
  },
  visible:{
    scale:1,
    rotateZ:0,
    opacity: 1,
    transition:{
      bounce:0.7,
      duration:0.24,
      ease:"circInOut",
    }
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
	)
}

export default HeaderBrand
