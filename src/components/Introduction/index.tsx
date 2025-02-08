import Left from "./Left";
import Right from "./Right";

function Introduction(): any {
	return (
		<>
			<div className="container m-auto mt-[70px] mb-[27px] flex flex-col md:flex-row justify-center md:gap-[7%] lg:gap-[15%] gap-[40px] items-center">
				<Left />
				<Right />
			</div>
		</>
	)
}

export default Introduction;