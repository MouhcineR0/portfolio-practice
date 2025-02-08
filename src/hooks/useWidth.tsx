import { useEffect, useState } from 'react'

const useWidth = (): number => {

	let [Width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	return (Width)
}

export default useWidth
