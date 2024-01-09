import DesktopNav from "../Navbar/DekstopNav"
import MobileNav from "../Navbar/MobileNav"
import { utils_links_desktop, utils_links_mobile } from "../../../../data/utils/navlink"
import UIStack from "../../../Layout/Stack"

type Props = {
	desktop?: boolean
	mobile?: boolean
}
const HeaderNav:React.FC<Props> = ({desktop=false, mobile=false}) => {
	return (
		<UIStack
			id="header-right"
			direction="vertical"
			centered="horizontal"
			customClass="w-full justify-end space-x-4 lg:space-x-8"
		>
			{desktop && <DesktopNav key="desktopNav" links={utils_links_desktop} />}
			{mobile && <MobileNav key="mobileNav" links={utils_links_mobile} />}
		</UIStack>
	)
}

export default HeaderNav
