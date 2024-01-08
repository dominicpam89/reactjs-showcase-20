import UIReactIcon from "../../../../ReactIcon"
import { FaCartShopping } from "react-icons/fa6"
import { motion } from "framer-motion"
import { useReducer } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const twClasses = {
  common:"transition-all duration-200 ease-out",
  overlay:{
    default: "-top-[50%] -left-[50%] h-[200%] w-[200%] border border-neutral-900/20 mix-blend-normal",
    hovered: "-top-[60%] -left-[60%] h-[230%] w-[230%] border border-neutral-900/20 mix-blend-normal",
    active: "-top-[60%] -left-[60%] h-[230%] w-[230%] bg-primary-main-color/40 border border-primary-main-color/30",
  },
  sticker:{
    default: "w-[110%] h-[110%] bg-danger-main-color/80 text-danger-main-contrast",
    hovered: "w-[125%] h-[125%] bg-danger-main-color/100 text-danger-main-contrast",
    active: "w-[125%] h-[125%] bg-danger-main-color/80 text-danger-main-contrast",
  },
  icon:{
    default: "h-full w-full",
    hovered: "h-[110%] w-[110%]",
    active: "h-full w-full"
  }

}

type State = {
	overlay: string
	sticker: string
  icon: string
}

type Action = {
  type: "hovered"|"default"
}

const initialState:State = {
  overlay: twClasses.overlay.default,
  sticker: twClasses.sticker.default,
  icon: twClasses.icon.default
}

const reducer = (state:State,action:Action)=>{
 state
 const {type} = action
 if(type==="hovered") return {
  overlay: twClasses.overlay.hovered,
  sticker: twClasses.sticker.hovered,
  icon: twClasses.icon.hovered
 }
 else return {
  overlay: twClasses.overlay.default,
  sticker: twClasses.sticker.default,
  icon: twClasses.icon.default
 }
}

const NavChart = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
	const navigate = useNavigate()
  const {pathname} = useLocation()
  const overlay = pathname==="/cart" ? twClasses.overlay.active:state.overlay
  const sticker = pathname==="/cart" ? twClasses.sticker.active:state.sticker
  const icon = pathname==="/cart" ? twClasses.icon.active:state.icon
  return (
		<button className="relative h-5 w-5" 
      onMouseOver={()=>dispatch({type:"hovered"})}
      onMouseOut={()=>dispatch({type:"default"})}
      onClick={()=>navigate("/cart")}
    >
			<motion.div
				className={`absolute rounded-full ${twClasses.common} ${overlay}`}
			></motion.div>
			<div className={`absolute -top-[100%] left-[50%] rounded-full flex items-center justify-center ${twClasses.common} ${sticker}`}
			>
				3
			</div>
			<UIReactIcon icon={<FaCartShopping />} className={`${twClasses.common} ${icon}`} />
		</button>
	)
}

export default NavChart
