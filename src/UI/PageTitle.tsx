type Props = {
	title: string
	subtitle?: string
}

const UIPageTitle: React.FC<Props> = ({ title, subtitle = "" }) => {
	const twClass = "absolute top-0 left-0 h-0 invisible"
	return (
		<>
			<div className="invisible relative">
				<h1 className={twClass}>{title}</h1>
				<h2 className={twClass}>{subtitle}</h2>
			</div>
		</>
	)
}

export default UIPageTitle
