import React, { useEffect, useState } from 'react'

const useWidth = (): number => {

	const [Width, setWidth] = useState(window.innerWidth);

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
