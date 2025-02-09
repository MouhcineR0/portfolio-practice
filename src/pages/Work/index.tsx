import { Link } from "react-router-dom"
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import Design from "../../assets/works/Design.png"

function Work() {

	interface Work {
		title: string,
		year: string,
		topic: string,
		text: string,
		url: string,
		img: string
	}

	const Works: Work[] = [
		{
			title: "Designing Dashboards",
			year: "2020",
			topic: "Dashboard",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Work/2",
			img: Dashboard
		},
		{
			title: "Vibrant Portraits of 2020",
			year: "2018",
			topic: "Illustration",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Work/2",
			img: Illustration
		},
		{
			title: "36 Days of Malayalam type",
			year: "2018",
			topic: "Typography",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Work/2",
			img: Typography
		},
		{
			title: "Components",
			year: "2017",
			topic: "Components, Design",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			url: "/Work/2",
			img: Design
		},
	]

	return (
		<div className='container m-auto md:px-0 px-2'>
			<h1 className='leading-[60px] md:mt-[60px] mt-[40px] font-bold md:text-[44px] text-[30px]'>Work</h1>
			<div className="flex flex-col">
				{
					Works.map((ele, _) => {
						return (
							<>
								<Link to={ele.url} className="flex md:my-[35px] my-[28px] md:gap-2 gap-1 items-center">
									<img src={ele.img} alt="" className="w-[30%]" />
									<div className="flex flex-col">
										<h2 className="text-[30px] font-bold">{ele.title}</h2>
										<div className="flex gap-3">
											<h4 className="bg-black text-[18px] text-white px-3 py-2 rounded-full font-black">{ele.year}</h4>
											<h4 className="text-[#8695A4] text-[20px]">{ele.topic}</h4>
										</div>
										<p>{ele.text}</p>
									</div>
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

export default Work
