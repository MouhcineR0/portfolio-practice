import { useParams } from 'react-router-dom'
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import Design from "../../assets/works/Design.png"
import Website from "../../assets/works/Website.png"
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'

function WorkDetails() {

	interface Work {
		id: number,
		title: string,
		year: string,
		topic: string,
		text: string,
		img: string,
		article: string
	}

	const Works: Work[] = [
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
	let markdownContent = `
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
![img](http://localhost:5173/src/assets/blog/image1.png)
#Heading 1
##Heading 2
![img](http://localhost:5173/src/assets/blog/image2.png)
![img](http://localhost:5173/src/assets/blog/image3.png)
`;
	const { id } = useParams();
	const [TargetElement, setTargetElement] = useState({});

	useEffect(() => {
		console.log(parseInt(id || '0'))
		setTargetElement(() => Works.find((ele, _) => ele.id == parseInt(id || '0')))
		console.log(Object.keys(TargetElement));
	}, [])

	return (
		<>
			{

			}
			< div className="markdown-container" >
				<Markdown>{markdownContent}</Markdown>
			</div >
		</>
	)
}

export default WorkDetails
