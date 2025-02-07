import { Link } from "react-router-dom";
import { useState } from "react";
import useWidth from "../../hooks/useWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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
		<div className={`z-[2] w-[100%] h-[100vh] p-[27px] mr-[500px] bg-white text-black absolute top-0 transition-right duration-300 overflow-hidden flex justify-end ${isOpen ? 'left-[0]' : 'left-[150%]'}`}>
			<IoClose size={35} onClick={toggleMenu} className="" />
		</div >
	);
	const ResHeader = (
		<div className="w-full flex justify-end">
			<RxHamburgerMenu size={30} className="hover:cursor-pointer" onClick={toggleMenu} />
		</div>
	)


	return (
		<>
			<div className="m-[27px]">
				{Width > 786 ? Header : ResHeader}
				{ResponsiveList}
			</div>
		</>
	)
}

export default Header;