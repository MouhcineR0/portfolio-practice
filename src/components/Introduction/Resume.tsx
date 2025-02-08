import File from '../../assets/image.png'

function Resume() {
	return (
		<button className='font-medium bg-[#FF6464] px-[20px] py-[14px] text-[17px] md:text-[20px] lg:px-[20px] lg:py-[10px] md:px-[15px] md:py-[7px] self-center md:self-start text-white hover:bg-[#fd7676] hover:text-white rounded-sm'>
			{/* set link of the resume */}
			<a href={File} download={true}>
				Download Resume
			</a>
		</button >
	)
}

export default Resume
