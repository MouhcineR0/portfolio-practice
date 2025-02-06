import { Link } from "react-router-dom";
import "../../index.css"

function Header(): any {
	return (
		<>
			<div className="m-[27px]">
				<div className="w-full flex justify-end gap-9">
					<Link to={'/Works'}>
						Works
					</Link>
					<Link to={'/Blog'}>
						Blog
					</Link>
					<Link to={'/Contact'}>
						Contact
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header;