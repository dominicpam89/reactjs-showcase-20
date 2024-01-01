import { Outlet } from "react-router-dom";
import { useAppSelector } from "../data/store";
import UINavbar from "./Navbar";

const UIRootLayout = () => {
  const {colorTheme,fontTheme} = useAppSelector(state=>state.theme)
  const twClass = `${colorTheme} ${fontTheme}`
  return <>
    <header className={twClass}>
      <UINavbar />
    </header>
    <main className={twClass}>
      <Outlet />
    </main>
  </>
}
 
export default UIRootLayout;