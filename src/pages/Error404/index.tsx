import { useNavigate } from "react-router-dom";

function Error404(): any {

	const Navigate = useNavigate();

	return (
		<div className='container m-auto flex flex-col gap-5 my-20 font-poppins md:p-0 px-2 text-center'>
			<h1 className='md:text-[100px] text-[75px]'>404 Not Found</h1>
			<p className='text-[16px]'>Your visited page not found. You may go home page. <span className="text-blue-600 underline cursor-pointer" onClick={() => Navigate(-1)}>Back</span></p>
		</div>
	);
}
export default Error404;