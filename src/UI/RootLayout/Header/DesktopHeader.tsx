import HeaderBrand from "./Common/Brand"
import HeaderNav from "./Common/Navbar"

const DesktopHeader = () => {
	return (
		<header className="p-6 md:p-8 flex justify-between items-center bg-neutral-100 text-neutral-900">
			<HeaderBrand />
			<HeaderNav desktop />
		</header>
	)
}

export default DesktopHeader
