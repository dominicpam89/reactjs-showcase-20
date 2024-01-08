import { AnimatePresence } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../../../data/store"
import { modalActions } from "../../../../data/store/modal"
import UIModal from "../../../Layout/Modal"
import UIIconButton from "../../../Button/IconButton"
import { MdMenu } from "react-icons/md"
import { motion } from "framer-motion"
import { TypeLinks } from "../Navbar"
import { Link, useLocation } from "react-router-dom"
import HeaderThemeToggle from "./Common/ThemeToggle"

type ContainerProps = {children:React.ReactNode}
type Props = {
  links: TypeLinks[]
}

const Container:React.FC<ContainerProps> = ({children})=>{
	return <motion.div
			aria-label="nav-mobile"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
}

const ModalMenu:React.FC<Props> = ({links})=>{
	const dispatch = useAppDispatch()
	return (
		<UIModal onClick={() => dispatch(modalActions.hidden())}>
			<Content links={links} />
		</UIModal>
	)
}

const Content:React.FC<Props> = ({links})=>{
	const {pathname} = useLocation()
	return (
		<div className="z-[800] absolute flex flex-col space-y-4 p-4 top-0 right-0 w-1/2 h-full bg-neutral-950 text-neutral-100" onClick={e=>e.stopPropagation()}>
			<ul className="flex flex-col text-lg space-y-4">
				{links.map(link=>{
					return <li>
						<Link to={link.link} className="relative">
							<span>{link.text}</span>
							{pathname===link.link && <ContentHighlight />}
						</Link>
					</li>
				})}
			</ul>
			<HeaderThemeToggle navType="mobile" />
		</div>
	)
}

const ContentHighlight = ()=>{
	return (
		<motion.div
			initial={{width:"0%"}}
			animate={{width:"100%"}}
			exit={{width:"0%"}}
			transition={{
				duration: 0.24,
				type:"spring"
			}}
			className="absolute w-full -bottom-1 -z-50 border border-warning-main-color/80"
		></motion.div>
	)
}

const SidebarMenu:React.FC<Props> = ({links}) => {
	const { visible: modalVisible } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	return (
		<Container>
			<UIIconButton
				onClick={()=>dispatch(modalActions.show())}
				icon={<MdMenu />}
				customClass="h-8"
			/>
			<AnimatePresence>s
				{modalVisible && <ModalMenu links={links} />}
			</AnimatePresence>
		</Container>
	)
}

export default SidebarMenu
