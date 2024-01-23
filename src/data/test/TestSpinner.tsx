import LoaderCubeMozaic from "../../UI/Loading/CubeMozaic";

const TestSpinner = () => {
  return <>
		<LoaderCubeMozaic 
			$duration="normal"
			$scale={1.5}
			className="text-warning-light-color"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		/>
  </>
}
 
export default TestSpinner;