import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWidth from "../../hooks/useWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

function Header(): any {

	const Width = useWidth();

	const [isOpen, setisOpen] = useState(false);

	useEffect(() => {
		if (Width > 786 && isOpen)
			setisOpen(false)
	}, [Width])

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
		<div className={`w-full h-[100vh] bg-white text-black z-[2] absolute top-0 transition-left duration-300 ${isOpen ? 'left-[0]' : 'left-[150%]'}`}>
			<div className={`w-full container m-auto flex flex-col justify-end mt-4 gap-3`}>
				<IoIosClose size={55} onClick={toggleMenu} className="self-end relative right-3 mb-4 cursor-pointer" color="gray" />
				<Link to={'/Works'} className={`${LinkStyle} self-center`}>
					Works
				</Link>
				<Link to={'/Blog'} className={`${LinkStyle} self-center`}>
					Blog
				</Link>
				<Link to={'/Contact'} className={`${LinkStyle} self-center`}>
					Contact
				</Link>
			</div >
		</div>
	);
	const ResHeader = (
		<div className="w-full flex justify-end">
			<RxHamburgerMenu size={30} className="hover:cursor-pointer" onClick={toggleMenu} />
		</div>
	)


	return (
		<>
			<div className="m-[27px]">
				{Width > 769 ? Header : ResHeader}
				{ResponsiveList}
			</div>
		</>
	)
}

export default Header;