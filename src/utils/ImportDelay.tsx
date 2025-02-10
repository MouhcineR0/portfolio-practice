import { lazy } from "react";

export default function ImportDelay(path: string) {
	return lazy(() => {
		return new Promise(resolve => {
			setTimeout(() => resolve(import(/* @vite-ignore */path)), 700)
		})
	})
}