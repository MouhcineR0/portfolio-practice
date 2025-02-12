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
			</div>
		</>
	)
}

export default Home;