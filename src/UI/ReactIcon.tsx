import { IconContext } from "react-icons"

type Props = {
	value?: IconContext
	className?: string
	icon: React.ReactNode
}

const UIReactIcon: React.FC<Props> = ({ icon, value={}, className="" }) => {
	return (
			<IconContext.Provider value={{ ...value, className }}>
				{icon}
			</IconContext.Provider>
	)
}

export default UIReactIcon
