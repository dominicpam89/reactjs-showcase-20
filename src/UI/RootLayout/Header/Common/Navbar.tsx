import DesktopNav from "../Navbar/DekstopNav"
import MobileNav from "../Navbar/MobileNav"
import { utils_links_desktop, utils_links_mobile } from "../../../../data/utils/navlink"

type Props = {
	desktop?: boolean
	mobile?: boolean
}
const HeaderNav:React.FC<Props> = ({desktop=false, mobile=false}) => {
	return (
		<div
			id="header-right"
			className="w-full flex justify-end items-center space-x-4 lg:space-x-8"
		>
			{desktop && <DesktopNav key="desktopNav" links={utils_links_desktop} />}
			{mobile && <MobileNav key="mobileNav" links={utils_links_mobile} />}
		</div>
	)
}

export default HeaderNav
