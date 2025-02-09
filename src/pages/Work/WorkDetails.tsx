import { useParams } from 'react-router-dom'
import Dashboard from "../../assets/works/Dashboard.png"
import Illustration from "../../assets/works/Illustration.png"
import Typography from "../../assets/works/Typography.png"
import Design from "../../assets/works/Design.png"
import Website from "../../assets/works/Website.png"
import ReactMarkdown from "react-markdown";

function WorkDetails() {

	const { id } = useParams();

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
	const markdownContent = `
# Welcome to Markdown in React!

Here is an image from the internet:  
![Test Image](https://avatars.githubusercontent.com/u/132463265?v=4)
`;
	return (
		<div className="markdown-container">
			<ReactMarkdown>{markdownContent}</ReactMarkdown>
		</div>
	)
}

export default WorkDetails
