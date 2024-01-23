import { motion } from "framer-motion"
import UIReactIcon from "../../../../ReactIcon"
import { IoIosAddCircleOutline as AddIcon } from "react-icons/io"
import { IoLogOutOutline as LogoutIcon } from "react-icons/io5"
import React from "react"
import { useGetUser } from "../../../../../data/hooks/useGetUser"

type Item = { key: string; text: string; icon: React.ReactNode }
const items:Item[] = [
	{ key:"item-create", text: "Create Item", icon: <AddIcon /> },
	{ key:"item-logout", text: "Logout", icon: <LogoutIcon /> },
]

const ProfileMenuContainer:React.FC<{children:React.ReactNode}> = ({children})=>{
	return <motion.div
			id="profile-menu"
			className={`
				z-[9999] absolute transform origin-top-left
				min-w-[200px] p-6
				rounded-md
				shadow-neutral-200 shadow-md
				bg-neutral-200 text-neutral-900
				transition-none
			`}
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0, transition: { duration: 0.12 } }}
			style={{
				x: "-150px",
				y: "50%",
			}}
		>{children}</motion.div>
}

const Item:React.FC<{item:Item}> = ({item})=>{
	const {user} = useGetUser()
	if(user && user.email!=="dominicpam89@gmail.com" && item.key==="item-create") return
	return (
		<motion.li
			id="list-item"
			className="hover:cursor-pointer transition-none flex space-x-2 items-center text-lg"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<span>{item.text}</span>
			<UIReactIcon icon={item.icon} className="mt-[2px] h-full" />
		</motion.li>
	)
}

const ProfileMenu = () => {
	return (
		<ProfileMenuContainer>
			<ul className="flex flex-col space-y-2" id="list">
				{items.map(item=>{
					return <Item key={item.key} item={item} />
				})}
			</ul>
		</ProfileMenuContainer>
	)
}

export default ProfileMenu
