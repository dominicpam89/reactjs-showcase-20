type Props = {
  children: React.ReactNode,
}

const AuthContainer:React.FC<Props> = ({children}) => {
  return (
		<div className="min-h-screen w-full p-14 bg-primary-main-color text-primary-main-contrast relative">
        {children}
		</div>
  )
}
 
export default AuthContainer;