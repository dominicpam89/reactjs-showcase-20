import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootLayout from "./UI/RootLayout"
import Home, { loader as redirectHome } from "./features/Home"
import Auth from "./features/Auth"

const router = createBrowserRouter([
	{
		path: "/",
		element: <UIRootLayout />,
		children: [
			{ index: true, loader: redirectHome },
			{ path: "home", element: <Home /> },
		],
	},
	{ path: "/auth", element: <Auth /> },
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
