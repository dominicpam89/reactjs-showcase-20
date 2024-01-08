import { useMediaQuery } from "../../data/hooks/useMediaQuery"
import DesktopHeader from "./Header/DesktopHeader"
import MobileHeader from "./Header/MobileHeader"

const RootHeader = () => {
	const isViewDesktop = useMediaQuery(`(min-width: 768px)`)
	return isViewDesktop ? <DesktopHeader />:<MobileHeader />
}

export default RootHeader
