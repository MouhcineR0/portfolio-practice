import Left from "./Left";
import Right from "./Right";

function Introduction(): any {

	const LocalStyle: string = "";

	return (
		<>
			<div className="container mt-[70px] mb-[27px] flex flex-row justify-center gap-6">
				<Left />
				<Right />
			</div>
		</>
	)
}

export default Introduction;