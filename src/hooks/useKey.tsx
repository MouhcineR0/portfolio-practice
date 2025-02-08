import { useEffect } from 'react'

function useKey(key: string, Callback: Function) {
	useEffect(() => {
		const EscHook = (e: any) => {
			if (e.key == key) {
				Callback(false);
			}
		}
		window.addEventListener('keyup', EscHook);
		return (() => {
			window.removeEventListener('keyup', EscHook);
		})
	}, [])
}

export default useKey
