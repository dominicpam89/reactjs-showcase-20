import HeaderBrand from "./Common/Brand"
import HeaderNav from "./Common/Navbar"

const MobileHeader = () => {
	return (
		<header className="p-6 md:p-8 flex justify-between items-center bg-neutral-100 text-neutral-900">
			<HeaderBrand />
			<HeaderNav mobile />
		</header>
	)
}

export default MobileHeader
