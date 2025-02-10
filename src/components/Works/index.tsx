import { Link } from "react-router-dom"
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import useWidth from "../../hooks/useWidth"

function Works() {

	let Width = useWidth();

	const works = [
		{
			id: 1,
			Title: "Designing Dashboards",
			Date: "2020",
			topic: "Dashboard",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Dashboard,
			url: '/works/Dashboard'
		},
		{
			id: 2,
			Title: "Vibrant Portraits of 2020",
			Date: "2020",
			topic: "Illustration",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Illustration,
			url: '/works/Illustration'
		},
		{
			id: 3,
			Title: "36 Days of Malayalam type",
			Date: "2017",
			topic: "Typography",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat  duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Typography,
			url: '/works/Typography'
		},
	]

	return (
		<div className="container m-auto md:px-0 px-4">
			<h2 className="text-[#21243D] text-[18px] leading-[60px] md:text-start text-center">Featured works</h2>
			<div className="flex flex-col gap-7">
				{
					works.map((ele, index) => {
						if (index && Width <= 769)
							return (null);
						return (
							<>
								<Link to={`work/${ele.id}`} key={index} className="flex flex-col md:flex-row gap-5 items-center">
									<img src={ele.img} alt="" className="xl:w-[20%] lg:w-[25%] md:w-[30%] h-auto" />
									<div className="flex flex-col self-start gap-4">
										<h1 className="xl:text-[30px] lg:text-[27px] text-[24px] font-bold">{ele.Title}</h1>
										<div className="flex flex-row gap-4 items-center">
											<h3 className="font-black lg:text-[18px] md:text-[16px] text-white bg-black rounded-full lg:px-4 px-3 py-1 text-[16px]">{ele.Date}</h3>
											<h3 className="lg:text-[20px] md:text-[18px] text-[16px] text-[#8695A4]">{ele.topic}</h3>
										</div>
										<p className="text-[16px] text-[#21243D]">{ele.text}</p>
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

export default Works
