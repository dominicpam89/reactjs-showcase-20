import { useAppSelector } from "../../../data/store"

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  size?: `${number}px`,
}

const HeaderBrand:React.FC<Props> = ({size=48, ...defaultProps}) => {
  const { colorTheme } = useAppSelector(state=>state.theme)
  const imgSrc = colorTheme==="theme-dark"
  ? "/logo/logo-primary-invert-sm.png"
  : "/logo/logo-primary-sm.png"
  return <>
    <img {...defaultProps} src={imgSrc} alt="foodsy logo" height={size} width={size} />
  </>
}
 
export default HeaderBrand;