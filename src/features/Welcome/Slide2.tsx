import UIStack from "../../UI/Layout/Stack"
import { useHook_getImage_slide2 } from "../../data/hooks/useWelcome";

const WelcomeSlide2 = () => {
  const {imageQuery, imageState} = useHook_getImage_slide2("sm")
  return <>
    <UIStack
      centered="all"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div aria-label="imageContainer" className="rounded-full w-[240px] h-[240px] overflow-hidden">
        {imageState==="isLoading" && <p>skeleton skeleton image</p>}
        {imageState==="isError" && <p>error message</p>}
        {imageState==="isReady" && <img src={imageQuery.data} alt="healthy food image small resolution" />}
      </div>
    </UIStack>
  </>
}
 
export default WelcomeSlide2;