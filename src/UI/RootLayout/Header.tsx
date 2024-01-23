import { useMediaQuery } from "../../data/hooks/useMediaQuery"
import HeaderBrand from "./Header/Common/Brand"
import { utils_links_desktop, utils_links_mobile } from "../../data/utils/navlink" 
import DesktopNav from "./Header/DekstopNav"
import MobileNav from "./Header/MobileNav"

const RootHeader = () => {
	const isViewDesktop = useMediaQuery(`(min-width: 768px)`)
	return <header id="header" className="p-6 md:p-8 flex justify-between items-center bg-neutral-100 text-neutral-900">
			<HeaderBrand />
			{isViewDesktop && <DesktopNav key="desktopNav" links={utils_links_desktop} />}
			{!isViewDesktop && <MobileNav key="mobileNav" links={utils_links_mobile} />}
		</header>
}

export default RootHeader
