import { Link } from "react-router-dom";

function Header(): any {

	const LinkStyle: string = "font-Heebo font-medium text-[20px] text-black transition duration-300 hover:cursor-pointer hover:text-gray-700";

	return (
		<>
			<div className="m-[27px]">
				<div className="w-full flex justify-end gap-9">
					<Link to={'/Works'} className={LinkStyle}>
						Works
					</Link>
					<Link to={'/Blog'} className={LinkStyle}>
						Blog
					</Link>
					<Link to={'/Contact'} className={LinkStyle}>
						Contact
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header;