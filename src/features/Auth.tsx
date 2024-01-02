import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import UIContainer from "../UI/Layout/Container"
import UIStack from "../UI/Layout/Stack"
import UIPageTitle from "../UI/PageTitle"
import UIBrandLogo from "../UI/Brand/Logo"
import UIBrandText from "../UI/Brand/Text"

const Auth = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	useEffect(() => {
		if (!searchParams.get("mode")) setSearchParams("mode=login")
	}, [searchParams, setSearchParams])
	return (
		<>
			<UIContainer aria-label="auth-container" color="primary">
				<UIPageTitle
					title="Trensy"
					subtitle="an app where you can share your minds!"
				/>
				<UIStack customClass="justify-center items-center">
					<UIBrandLogo />
					<UIBrandText />
				</UIStack>
			</UIContainer>
		</>
	)
}

export default Auth
