interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	contents?: 2 | 3
  centerElement?: React.ReactNode
  brand: React.ReactNode
  navigation: React.ReactNode
}

const RootHeader: React.FC<Props> = ({ contents = 2, brand, navigation, centerElement=<></>, ...defaultProps }) => {
	return (
		<>
			<header {...defaultProps} className="p-8 flex justify-between items-center bg-neutral-100 text-neutral-800">
				<div
					id="header-left"
					className="w-full flex-grow-0 flex justify-start space-x-2"
				>
					{brand}
				</div>
				{contents === 3 && (
					<div
						id="header-center"
						className="flex justify-center space-x-2"
					>
						{centerElement}
					</div>
				)}
				<div
					id="header-right"
					className="w-full flex justify-end md:space-x-4 lg:space-x-8"
				>
					{navigation}
				</div>
			</header>
		</>
	)
}

export default RootHeader
