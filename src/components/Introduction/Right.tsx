import Img from "./../../assets/image.png"


const Right = () => {
	return (
		<div className='z-0 md:order-2 order-1 md:w-[100%] flex justify-center'>
			<div className="w-[75%] rounded-[50%] bg-[#EDF7FA]">
				<img src={Img} alt="" className='relative bottom-[10px] left-[10px] w-[100%]' />
			</div>
		</div>
	)
}

export default Right
