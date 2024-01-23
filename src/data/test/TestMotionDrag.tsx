import { PanInfo, motion, useDragControls } from "framer-motion"

type Event = React.PointerEvent<Element> | PointerEvent

const TestMotionDrag = () => {
	const dragControls = useDragControls()

	function startDrag(event:Event) {
		dragControls.start(event, { snapToCursor: true })
	}

	function onDragEnd(event:PointerEvent | MouseEvent | TouchEvent, info:PanInfo){
		event
		console.log("offset of x: ",info.offset.x)
		if(info.offset.x<0) console.log("moved to prev slide")
		if(info.offset.x>0) console.log("moved to next slide")
	}

	return (
		<>
			<div onPointerDown={startDrag} />
			<motion.div
				className="h-10 w-10 bg-white transition-none"
				drag="x"
				dragMomentum
				dragConstraints={{ left: -50, right: 50 }}
				dragControls={dragControls}
				onDragEnd={onDragEnd}
			/>
		</>
	)
}

export default TestMotionDrag
