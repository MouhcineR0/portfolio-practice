import { Link } from 'react-router-dom'

function Blog() {

	interface Blog {
		title: string,
		Date: string,
		topic: string,
		text: string,
		url: string
	}
	const Blogs: Blog[] = [
		{
			title: "UI Interactions of the week",
			Date: "12 Feb 2019",
			topic: "Express,Handlebars",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Blog/315"
		},
		{
			title: "UI Interactions of the week",
			Date: "12 Feb 2019",
			topic: "Express,Handlebars",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Blog/315"
		},
		{
			title: "UI Interactions of the week",
			Date: "12 Feb 2019",
			topic: "Express,Handlebars",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Blog/315"
		},
		{
			title: "UI Interactions of the week",
			Date: "12 Feb 2019",
			topic: "Express,Handlebars",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Blog/315"
		},
	]

	return (
		<div className='container m-auto md:px-0 px-2'>
			<h1 className='leading-[60px] md:mt-[60px] mt-[40px] font-bold md:text-[44px] text-[30px]'>Blogs</h1>
			<div className="flex flex-col">
				{
					Blogs.map((ele, _) => {
						return (
							<>
								<Link to={ele.url} className="flex flex-col md:my-[35px] my-[28px] md:gap-2 gap-1">
									<h2 className='md:text-[30px] text-[26px] font-medium'>{ele.title}</h2>
									<div className="flex items-center gap-5">
										<h3 className='md:text-[20px] text-[16px]'>{ele.Date}</h3>
										<h3>|</h3>
										<h3 className='text-[#8695A4] select-none text-[16px] md:text-[18px]'>{ele.topic}</h3>
									</div>
									<p className='md:text-[16px] text-[14px]'>{ele.text}</p>
								</Link>
								<hr className="w-full h-[1px] bg-[#E0E0E0]" />
							</>
						)
					})
				}
			</div>
		</div>
	)
}

export default Blog
