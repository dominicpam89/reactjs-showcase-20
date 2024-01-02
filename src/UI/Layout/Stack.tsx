import { HTMLMotionProps, motion } from "framer-motion"
interface Props extends HTMLMotionProps<"div">{
  direction?: "horizontal"|"vertical"
  spacing?: "sm"|"md"|"lg"
  customClass?: string
  centered?: "horizontal"|"vertical"|"all"
}

const twClasses = {
  default: "flex",
  direction: {
    vertical: "flex-row",
    horizontal: "flex-col",
  },
  spacing:{
    sm:{
      vertical: "space-x-2",
      horizontal: "space-y-2"
    },
    md:{
      vertical: "space-x-4",
      horizontal: "space-y-4"
    },
    lg:{
      vertical: "space-x-8",
      horizontal: "space-y-8"
    },
  },
  centered:{
    vertical: "justify-center",
    horizontal: "items-center",
    all: "justify-center items-center"
  }
}

const UIStack:React.FC<Props> = ({
  direction="horizontal",
  spacing="sm",
  centered="all",
  customClass="",
  children,
  ...defaultProps
}) => {
  
  // direction
  const _direction =
		direction === "horizontal"
			? twClasses.direction.horizontal
			: twClasses.direction.vertical

  // spacing
  let _spacing
  if(direction==="horizontal"){
    _spacing = spacing==="lg"
    ? twClasses.spacing.lg.horizontal
    : spacing==="md"
    ? twClasses.spacing.md.horizontal
    : twClasses.spacing.sm.horizontal
  }
  else{
    _spacing = spacing==="lg"
    ? twClasses.spacing.lg.vertical
    : spacing==="md"
    ? twClasses.spacing.md.vertical
    : twClasses.spacing.sm.vertical
  }

  // centered
  const _centered = centered==="all"
  ? twClasses.centered.all
  : centered==="horizontal"
  ? twClasses.centered.horizontal
  : twClasses.centered.vertical

  return <>
    <motion.div {...defaultProps} aria-label="stack" className={`${twClasses.default} ${_direction} ${_spacing} ${_centered} ${customClass}`}>
      {children}
    </motion.div>
  </>
}
 
export default UIStack;