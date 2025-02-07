import React from 'react'
import Resume from './Resume';

const Left = () => {

	const LocalStyle: string = "";

	return (
		<div className="flex flex-col gap-[40px] font-Heebo md:order-1 order-2 md:text-start text-center">
			<p className='font-bold lg:text-[44px] md:text-[38px] text-[34px] leading-[60px]'>
				Hi, I am John, <br />Creative Technologist
			</p>
			<p className='font-normal text-[16px] text-[#21243D] text-center md:text-left'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
			<Resume />
		</div>
	)
}

export default Left
