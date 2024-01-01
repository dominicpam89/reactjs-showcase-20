import { Outlet } from "react-router-dom";
import UINavbar from "./Navbar";

const UIRootLayout = () => {
  return <>
    <header>
      <UINavbar />
    </header>
    <main>
      <Outlet />
    </main>
  </>
}
 
export default UIRootLayout;