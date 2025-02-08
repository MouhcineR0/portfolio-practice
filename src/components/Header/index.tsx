import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useWidth from "../../hooks/useWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import useKey from "../../hooks/useKey";

function Header(): any {

	const Width = useWidth();

	const [isOpen, setisOpen] = useState(false);
	// listener event for esc to close the menu
	useKey("Escape", setisOpen);

	useEffect(() => {
		if (Width > 786 && isOpen)
			setisOpen(false)
	}, [Width])

	// useEffect(() => {
	// 	console.log("ss")
	// 	if (isOpen)
	// 		document.body.style.overflow = 'hidden';
	// 	else
	// 		document.body.style.overflow = 'auto';
	// }, [isOpen])


	const LinkStyle: string = `font-Heebo font-regular text-[20px] transition duration-300 hover:cursor-pointer hover:text-gray-700`;

	const toggleMenu = (): void => {
		setisOpen(!isOpen);
	}

	// Desktop | tablette header
	const Header = (
		<div className="w-full flex justify-end gap-9">
			<NavLink to={'/Works'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464]` : `${LinkStyle} text-black`}>
				Works
			</NavLink>
			<NavLink to={'/Blog'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464]` : `${LinkStyle} text-black`}>
				Blog
			</NavLink>
			<NavLink to={'/Contact'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464]` : `${LinkStyle} text-black`}>
				Contact
			</NavLink>
		</div >
	)
	// Responsive header
	const ResponsiveList = (
		<div className={`w-full h-[100%] bg-white text-black z-[2] absolute top-0 transition-left duration-300 md:hidden block ${isOpen ? 'left-[0]' : 'left-[150%]'}`}>
			<div className={`w-full container m-auto flex flex-col justify-end mt-4 gap-3`}>
				<IoIosClose size={55} onClick={toggleMenu} className="self-end relative right-3 mb-4 cursor-pointer" color="gray" />
				<NavLink to={'/Works'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464] self-center` : `${LinkStyle} text-black self-center`}>
					Works
				</NavLink>
				<NavLink to={'/Blog'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464] self-center` : `${LinkStyle} text-black self-center`}>
					Blog
				</NavLink>
				<NavLink to={'/Contact'} className={({ isActive }) => isActive ? `${LinkStyle} text-[#FF6464] self-center` : `${LinkStyle} text-black self-center`}>
					Contact
				</NavLink>
			</div >
		</div>
	);
	const ResHeader = (
		<div className="w-full flex justify-end">
			<RxHamburgerMenu size={30} className="hover:cursor-pointer relative right-7" onClick={toggleMenu} />
		</div>
	)


	return (
		<>
			<div className="my-[27px] container m-auto">
				{Width > 769 ? Header : ResHeader}
				{ResponsiveList}
			</div>
		</>
	)
}

export default Header;