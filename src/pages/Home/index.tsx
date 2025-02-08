import Contact from "../../components/Contact";
import Introduction from "../../components/Introduction";
import Posts from "../../components/Posts";
import Works from "../../components/Works";

function Home(): any {
	return (
		<>
			<div className="relative overflow-hidden">
				<Introduction />
				<Posts />
				<Works />
				<Contact />
			</div>
		</>
	)
}

export default Home;