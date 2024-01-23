import { useState } from "react"
import NavAvatarContent from "./NavAvatar/Avatar"
import ProfileMenu from "./NavAvatar/ProfileMenu"
import { AnimatePresence } from "framer-motion"

const NavAvatar = () => {
	// Avatar logic
	const [profileMenuSeen, setProfileMenuSeen] = useState(false)
	const onMouseEnterAvatar = () => setProfileMenuSeen(true)
	const onMouseLeaveAvatar = () => setProfileMenuSeen(false)
	return (
		<div
			id="empty-container"
			className="relative hover:cursor-pointer"
			onMouseEnter={onMouseEnterAvatar}
			onMouseLeave={onMouseLeaveAvatar}
		>
			<AnimatePresence>{profileMenuSeen && <ProfileMenu />}</AnimatePresence>
			<NavAvatarContent />
		</div>
	)
}

export default NavAvatar
