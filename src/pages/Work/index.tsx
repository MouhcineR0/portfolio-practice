import { Link } from "react-router-dom"
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import Design from "../../assets/works/Design.png"
import Website from "../../assets/works/Website.png"

function Work() {

	interface Work {
		id: number,
		title: string,
		year: string,
		topic: string,
		text: string,
		img: string
	}

	const Works: Work[] = [
		{
			id: 1,
			title: "Designing Dashboards",
			year: "2020",
			topic: "Dashboard",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Dashboard
		},
		{
			id: 2,
			title: "Vibrant Portraits of 2020",
			year: "2018",
			topic: "Illustration",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Illustration
		},
		{
			id: 3,
			title: "Designing Landing pages",
			year: "2018",
			topic: "Website",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Website
		},
		{
			id: 4,
			title: "36 Days of Malayalam type",
			year: "2018",
			topic: "Typography",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Typography
		},
		{
			id: 5,
			title: "Components",
			year: "2017",
			topic: "Components, Design",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Design
		},
	]

	return (
		<div className='container m-auto md:px-0 px-2'>
			<h1 className='leading-[60px] md:mt-[60px] mt-[40px] font-bold md:text-[44px] text-[30px]'>Work</h1>
			<div className="flex flex-col">
				{
					Works.map((ele, ind) => {
						return (
							<>
								<Link to={`${ele.id}`} key={ind} className="flex md:flex-row flex-col md:my-[35px] my-[28px] md:gap-8 gap-3">
									<img src={ele.img} alt="" className="md:w-[30%] w-full self-center" />
									<div className="flex flex-col md:gap-4 gap-2">
										<h2 className="md:text-[30px] text-[24px] font-bold">{ele.title}</h2>
										<div className="flex gap-5">
											<h4 className="bg-black md:text-[18px] text-[16px] text-white px-3 py-1 rounded-full font-black">{ele.year}</h4>
											<h4 className="text-[#8695A4] md:text-[20px] text-[16px]">{ele.topic}</h4>
										</div>
										<p className="text-[16px]">{ele.text}</p>
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
