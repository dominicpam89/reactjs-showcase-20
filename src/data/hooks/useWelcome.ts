import { File, TypeImageSize, service_welcome } from "../services/page-welcome"
import { useQuery } from "@tanstack/react-query"

export const useHookWelcomePage = (file:File, size:TypeImageSize) => {
  // State of Render
	const imageQuery = useQuery({
		queryKey: ["images", "welcome", {file, size}],
		queryFn: () => service_welcome(file, size),
	})

	const {data, error, isLoading, isError, isSuccess} = imageQuery

	const imageState = {isLoading, isError, isSuccess}
	const imageData = {data, error}

	return {
		imageState,
		imageData
	}
}
