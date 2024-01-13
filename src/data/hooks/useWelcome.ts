import { useState, useEffect } from "react"
import { service_welcome_slide2, TypeImageSize } from "../services/welcome/slide2"
import { useQuery } from "@tanstack/react-query"

type FetchState = null|"isReady"|"isError"|"isLoading"

export const useHook_getImage_slide2 = (size:TypeImageSize) => {
  // State of Render
	const [imageState, setImageState] = useState<FetchState>(null)

	const imageQuery = useQuery({
		queryKey: ["images", "welcome", size],
		queryFn: () => service_welcome_slide2("sm"),
	})

	// set condition based on query
	useEffect(() => {
		if (imageQuery.isLoading) {
			setImageState("isLoading")
		} else if (imageQuery.data) {
			setImageState("isReady")
		} else {
			setImageState("isError")
		}
	}, [imageQuery, setImageState])

	return {
		imageState,
    imageQuery
	}
}
