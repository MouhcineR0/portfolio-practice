import { useParams } from 'react-router-dom'
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import Design from "../../assets/works/Design.png"
import Website from "../../assets/works/Website.png"
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import { WorkInterface } from '../../interfaces'

function WorkDetails() {

	const Works: WorkInterface[] = [
		{
			id: 1,
			title: "Designing Dashboards",
			year: "2020",
			topic: "Dashboard",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Dashboard,
			article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)`
		},
		{
			id: 2,
			title: "Vibrant Portraits of 2020",
			year: "2018",
			topic: "Illustration",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Illustration,
			article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)`
		},
		{
			id: 3,
			title: "Designing Landing pages",
			year: "2018",
			topic: "Website",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Website,
			article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)`
		},
		{
			id: 4,
			title: "36 Days of Malayalam type",
			year: "2018",
			topic: "Typography",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Typography,
			article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)`
		},
		{
			id: 5,
			title: "Components",
			year: "2017",
			topic: "Components, Design",
			text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			img: Design,
			article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)`
		},
	]

	const { id } = useParams<{ id: string }>();
	const [TargetElement, setTargetElement] = useState<WorkInterface | null>(null);

	useEffect(() => {
		const Target = Works.find((ele, _) => ele.id == parseInt(id || '0'))

		setTargetElement(Target || null);
	}, [id])


	return (
		<>
			{
				Object.keys(TargetElement || {}).length ? (
					<div className="container m-auto flex flex-col md:mt-11 mt-8 md:px-0 px-2">
						<h1 className='md:text-[34px] text-[30px] font-bold leading-[40px] md:leading-none md:mb-3 mb-2'>{TargetElement?.title}</h1>
						<div className="flex items-center gap-5 md:mb-15 mb-10">
							<h3 className='text-[18px] text-white bg-[#FF7C7C] px-3 py-1 font-black rounded-full'>{TargetElement?.year}</h3>
							<h3 className='md:text-[20px] text-[18px]'>{TargetElement?.topic}</h3>
						</div>
						< div className="markdown-container">
							<Markdown className='flex flex-col gap-3'>{TargetElement?.article || ''}</Markdown>
						</div >
					</div>

				) : null
			}
		</>
	)
}

export default WorkDetails
