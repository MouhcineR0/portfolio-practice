import { Link } from 'react-router-dom'

function Posts() {

	const Post = [
		{
			Title: "Making a design system from scratch",
			Date: "12 Feb 2020",
			topic: "Design, Pattern",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
		},
		{
			Title: "Creating pixel perfect icons in Figma",
			Date: "15 Feb 2020",
			topic: "Figma, Icon Design",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
		},
		{
			Title: "Making a design system from scratch",
			Date: "12 Feb 2020",
			topic: "Design, Pattern",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
		},
		{
			Title: "Creating pixel perfect icons in Figma",
			Date: "15 Feb 2020",
			topic: "Figma, Icon Design",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
		}
	]
	if (!Post.length)
		return 0;

	return (
		<div className='w-full bg-[#EDF7FA] md:mt-[30px] pb-6'>
			{/* header */}
			<div className="container m-auto md:px-0 px-2">
				<div className="flex justify-between items-center">
					<h3 className='text-[#21243D] md:text-[22px] text-[18px] font-normal leading-[60px] m-auto md:m-0'>Recent posts</h3>
					<Link to={'/blog'} className='text-[#00A8CC] md:text-[16px] text-[14px] md:block hidden'>View all</Link>
				</div>
				<div className="flex md:flex-row flex-col text-[#21243D] justify-between items-center gap-5 md:gap-0">
					{
						Post.slice(0, 2).map((ele, _) => {
							return (
								<div className="flex flex-col gap-4 bg-white p-5 md:w-[48%] w-[95%] rounded-md">
									<h2 className='font-bold md:text-[26px] text-[22px]'>{ele.Title}</h2>
									<div className='md:text-[18px] text-[16px] flex gap-3'>
										<span>{ele.Date}</span>
										<span>|</span>
										<span>{ele.topic}</span>
									</div>
									<p className='md:text-[16px] text-[14px]'>{ele.text}</p>
								</div>
							);
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Posts
