import RootHeader from "./RootLayout/Header"
import RootMain from "./RootLayout/Main";
import RootFooter from "./RootLayout/Footer";
import HeaderNav from "./RootLayout/Header/Navbar";
import HeaderBrand from "./RootLayout/Header/Brand";

const UIRootLayout = () => {
  return <>
    <RootHeader 
      brand={<HeaderBrand />}
      navigation={<HeaderNav />}
    />
    <RootMain />
    <RootFooter />
  </>
}
 
export default UIRootLayout;