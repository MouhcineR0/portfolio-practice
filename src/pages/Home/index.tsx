import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Posts from "../../components/Posts";
import Works from "../../components/Works";

function Home(): any {
	return (
		<>
			<div className="relative overflow-hidden">
				<Header />
				<Introduction />
				<Posts />
				<Works />
				<Contact />
			</div>
		</>
	)
}

export default Home;