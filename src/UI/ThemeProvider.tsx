import { useAppSelector } from "../data/store"

type Props = {
  children: React.ReactNode
}

const UIThemeProvider:React.FC<Props> = ({children}) => {
  const {colorTheme,fontTheme} = useAppSelector(state=>state.theme)
  const twClass = `relative ${colorTheme} ${fontTheme}`
  return <>
    <div aria-label="theme-container" className={twClass}>
      {children}
    </div>
  </>
}
 
export default UIThemeProvider;