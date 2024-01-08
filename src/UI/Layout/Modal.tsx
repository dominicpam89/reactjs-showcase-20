import { createPortal } from "react-dom"
import { HTMLMotionProps, motion } from "framer-motion"
import UIThemeProvider from "../ThemeProvider"

interface ModalProps extends HTMLMotionProps<"div">{
	centered?: boolean,
	children: React.ReactNode
}

const modal: any = document.querySelector("#modal")

const twClasses = {
		modalContainer: `fixed top-0 left-0 z-[500] w-screen h-screen bg-neutral-100/50 overflow-scroll transition-none`,
		centeredContent: `flex w-full h-screen justify-center items-center`,
	}

const UIModal: React.FC<ModalProps> = ({
	centered = false,
	children,
	...defaultProps
}) => {
	const centeredContent = (
		<div className={twClasses.centeredContent}>{children}</div>
	)
	return createPortal(
		<UIThemeProvider>
			<motion.div
				{...defaultProps}
				id="modal-container"
				className={twClasses.modalContainer}
				data-layer="modal"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{centered ? centeredContent : children}
			</motion.div>
		</UIThemeProvider>,
		modal
	)
}

export default UIModal
