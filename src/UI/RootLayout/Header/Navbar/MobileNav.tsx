import { AnimatePresence } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../../../data/store"
import { modalActions } from "../../../../data/store/modal"
import { MdMenu } from "react-icons/md"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { TypeLinks } from "../../../../data/utils/navlink"
import HeaderThemeToggle from "./Common/ThemeToggle"
import UIModal from "../../../Layout/Modal"
import UIIconButton from "../../../Button/IconButton"

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
		<div
			className="z-[800] absolute flex flex-col space-y-10 top-0 right-0 w-1/2 h-full p-12 bg-neutral-950 text-neutral-100"
			onClick={(e) => e.stopPropagation()}
		>
			<ul className="flex flex-col text-lg space-y-10">
				{links.map((link) => {
					return <li key={link.link}>
							<Link to={link.link} className="relative flex space-x-2 items-center">
								<span>{link.icon}</span>
								<span className="font-heading">{link.text}</span>
								{pathname === link.link && <ContentHighlight />}
							</Link>
						{link.text==="Service" && <ContentDivider />}
					</li>
				})}
			</ul>
			<HeaderThemeToggle navType="mobile" />
		</div>
	)
}

const ContentHighlight = ()=>{
	const {colorTheme} = useAppSelector(state=>state.theme)
	const borderColor = colorTheme==="theme-dark" ? "border-info-main-color/50":"border-warning-main-color/50"
	return (
		<motion.div
			initial={{width:"0%"}}
			animate={{width:"100%"}}
			transition={{
				duration: 0.48,
				type:"spring",
				bounce: 0.5
			}}
			className={`absolute transition-colors w-full -left-2 -bottom-1 -z-50 border ${borderColor}`}
		></motion.div>
	)
}

const ContentDivider = ()=>{
	return <div className="mt-10 w-full h-[1px] bg-neutral-100/10"></div>
}

const MobileNav:React.FC<Props> = ({links}) => {
	const { visible: modalVisible } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()
	return (
		<Container>
			<UIIconButton
				onClick={()=>dispatch(modalActions.show())}
				icon={<MdMenu />}
				customClass="h-8"
			/>
			<AnimatePresence>
				{modalVisible && <ModalMenu links={links} />}
			</AnimatePresence>
		</Container>
	)
}

export default MobileNav
