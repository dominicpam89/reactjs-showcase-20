import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootLayout from "./UI/RootLayout"
import Welcome from "./features/Welcome"
import HomePage, { loader as redirectHome } from "./features/Home"
import MenuPage from "./features/Menu"
import AboutPage from "./features/About"
import ServicePage from "./features/Service"
import CartPage from "./features/Cart"
import ProfilePage from "./features/Profile"

const router = createBrowserRouter([
	{
		path: "/",
		element: <UIRootLayout />,
		children: [
			{ index: true, loader: redirectHome },
			{ path: "home", element: <HomePage /> },
			{ path: "menu", element: <MenuPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "service", element: <ServicePage /> },
			{ path: "cart", element: <CartPage /> },
			{ path: "profile", element: <ProfilePage /> },
		],
	},
	{ path: "/welcome", element: <Welcome /> }
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
