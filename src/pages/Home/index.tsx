import Header from "../../components/Header";
import Introduction from "../../components/Introduction";

function Home(): any {
	return (
		<>
			<div className="container m-auto">
				<Header />
				<Introduction />
			</div>
		</>
	)
}

export default Home;