import HeaderThemeToggle from "./Navbar/ThemeToggle"
import LinkItem from "./Navbar/LinkItem"

const links = [
	{ link: "/home", text: "Home" },
	{ link: "/profile", text: "Profile" },
	{ link: "/settings", text: "Settings" },
	{ link: "/auth", text: "Auth" },
]

const HeaderNav = () => {
	return (
		<>
			<HeaderThemeToggle />
			<ul className="flex justify-center md:space-x-4 lg:space-x-8">
				{links.map((link) => <LinkItem key={link.link} link={link} />)}
			</ul>
		</>
	)
}

export default HeaderNav
