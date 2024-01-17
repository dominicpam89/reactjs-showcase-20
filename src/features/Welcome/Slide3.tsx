import UIStack from "../../UI/Layout/Stack";
import TestIconButton from "../../data/test/TestIconButton";
import { BiAlarm } from "react-icons/bi"

const WelcomeSlide3 = () => {
  return (
		<>
			<UIStack centered="all">
				<TestIconButton 
					$icon={<BiAlarm />}
					$textPos="end"
					$text="Alarm"
					$color="primary"
					$size="lg"
				/>
			</UIStack>
		</>
  )
}
 
export default WelcomeSlide3;