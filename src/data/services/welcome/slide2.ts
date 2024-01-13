import { storage } from "../firebase"
import { ref, getDownloadURL, StorageError } from "firebase/storage"

export type TypeImageSize = "xxs" | "xs" | "sm" | "md" | "lg"
export const service_welcome_slide2 = async (size: TypeImageSize) => {
	const imageFileNames = {
		xxs: "slide-2-xxs.jpg",
		xs: "slide-2-xs.jpg",
		sm: "slide-2-sm.jpg",
		md: "slide-2-md.jpg",
		lg: "slide-2-lg.jpg",
	}
	const welcomeBucket = ref(storage, "welcome")
	const imageList = {
		xxs: ref(welcomeBucket, imageFileNames.xxs),
		xs: ref(welcomeBucket, imageFileNames.xs),
		sm: ref(welcomeBucket, imageFileNames.sm),
		md: ref(welcomeBucket, imageFileNames.md),
		lg: ref(welcomeBucket, imageFileNames.lg),
	}
	return getDownloadURL(imageList[`${size}`])
		.then((url) => {
			return url
		})
		.catch((error: StorageError) => {
			throw error
		})
}
