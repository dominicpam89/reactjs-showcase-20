import { CiHome as IconHome, CiCircleInfo as IconAbout } from "react-icons/ci"
import { IoFastFoodSharp as IconMenu, IoSettings as IconProfile } from "react-icons/io5"
import { FaHandHoldingHand as IconService } from "react-icons/fa6"
import { MdShoppingCart as IconCart } from "react-icons/md"


export type TypeLinks = {
	link: string
	text: string
	icon?: React.ReactNode
}

const desktopLinks: TypeLinks[] = [
	{ link: "/home", text: "Home" },
	{ link: "/menu", text: "Menu" },
	{ link: "/about", text: "About" },
	{ link: "/service", text: "Service" },
]

const mobileLinks: TypeLinks[] = [
	{ link: "/home", text: "Home", icon: IconHome() },
	{ link: "/menu", text: "Menu", icon: IconMenu() },
	{ link: "/about", text: "About", icon: IconAbout() },
	{ link: "/service", text: "Service", icon: IconService() },
	{ link: "/cart", text: "Cart", icon: IconCart() },
	{ link: "/profile", text: "Profile", icon: IconProfile() },
]

export {
	desktopLinks as utils_links_desktop,
	mobileLinks as utils_links_mobile,
}
