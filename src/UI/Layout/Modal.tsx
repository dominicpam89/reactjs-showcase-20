import { createPortal } from "react-dom"
import { HTMLMotionProps, motion } from "framer-motion"
import { useAppDispatch } from "../../data/store"
import { modalActions } from "../../data/store/modal"

interface ModalProps extends HTMLMotionProps<"div">{
	centered?: boolean,
	children: React.ReactNode
}

const modal: any = document.querySelector("#modal")

const twClasses = {
		modalContainer: `fixed top-0 left-0 z-[500] w-screen h-screen bg-gray-800/80 overflow-scroll`,
		centeredContent: `flex w-full h-screen justify-center items-center`,
	}

const UIModal: React.FC<ModalProps> = ({
	centered = false,
	children,
	...defaultProps
}) => {
	const dispatch = useAppDispatch()
	const centeredContent = (
		<div className={twClasses.centeredContent}>{children}</div>
	)
	return createPortal(
		<motion.div
			{...defaultProps}
			id="modal-container"
			className={twClasses.modalContainer}
			data-layer="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={()=>dispatch(modalActions.hidden())}
		>
			{centered ? centeredContent : children}
		</motion.div>,
		modal
	)
}

export default UIModal
