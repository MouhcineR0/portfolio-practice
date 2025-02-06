import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWidth from "../../hooks/useWidth";
import { useState } from "react";

function Header(): any {

	const Width = useWidth();

	const [isOpen, setisOpen] = useState(false);

	const LinkStyle: string = "font-Heebo font-regular text-[20px] text-black transition duration-300 hover:cursor-pointer hover:text-gray-700";

	const toggleMenu = (): void => {
		setisOpen(!isOpen);
	}

	// Desktop | tablette header
	const Header = (
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
	)
	// Responsive header
	const ResponsiveList = (
		<div className="w-[100vw] h-[100vh] bg-white text-black">
			ss
		</div>
	);
	const ResHeader = (
		isOpen ? ResponsiveList :
			< div className="w-full flex justify-end" >
				<RxHamburgerMenu size={30} className="hover:cursor-pointer" onClick={toggleMenu} />
			</div >
	)


	return (
		<>
			<div className="m-[27px]">
				{
					Width > 786 ? Header : ResHeader
				}

			</div>
		</>
	)
}

export default Header;