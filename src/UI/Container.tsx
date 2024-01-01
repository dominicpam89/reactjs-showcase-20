interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	centered?: boolean
	padding?: "sm" | "md" | "lg"
	customClass?: string
}

const twClasses = {
	default: "min-h-screen w-full flex bg-neutral-100 text-neutral-800",
	centered: {
		true: "justify-center items-center",
		false: "justify-center",
	},
	padding: {
		sm: "p-8",
		md: "p-14",
		lg: "p-24",
	},
}

const UIContainer: React.FC<Props> = ({
	children,
	centered = true,
	padding = "md",
	customClass="",
	...defaultProps
}) => {
	const _centered = centered
		? twClasses.centered.true
		: twClasses.centered.false
	const _padding =
		padding === "sm"
			? twClasses.padding.sm
			: padding === "md"
			? twClasses.padding.md
			: twClasses.padding.lg
	return (
		<div
			{...defaultProps}
			className={`${twClasses.default} ${_centered} ${_padding} ${customClass}`}
		>
			{children}
		</div>
	)
}

export default UIContainer
