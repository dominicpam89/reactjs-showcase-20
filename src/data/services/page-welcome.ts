import { storage } from "./firebase"
import { ref, getDownloadURL, StorageError } from "firebase/storage"

export type TypeImageSize = "xxs" | "xs" | "sm" | "md" | "lg"
type FileImage<T extends string> = T | Omit<string, "slide-2"|"slide-3">
export type File = FileImage<"slide-2"|"slide-3">
export const service_welcome = async function (
	filename: File,
	size: TypeImageSize
) {
	const imageFileNames = {
		xxs: `${filename}-xxs.jpg`,
		xs: `${filename}-xs.jpg`,
		sm: `${filename}-sm.jpg`,
		md: `${filename}-md.jpg`,
		lg: `${filename}-lg.jpg`,
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
