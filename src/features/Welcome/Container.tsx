type Props = {
  children: React.ReactNode
  customClass?: string
}

const WelcomeContainer:React.FC<Props> = ({children, customClass=""}) => {
  return (
		<div className={`
      relative min-h-screen w-full
      flex flex-col justify-center 
      px-12 sm:px-24 md:px-52 lg:px-72
      space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10
      ${customClass}  
    `}>
        {children}
		</div>
  )
}
 
export default WelcomeContainer;