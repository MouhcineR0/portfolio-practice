import FacebookLogo from "../../assets/logos/facebook.png"
import XLogo from "../../assets/logos/x.png"
import InstagramLogo from "../../assets/logos/instagram.png"
import LinkedinLogo from "../../assets/logos/linkedin.png"

function Contact() {

	const Socials = [
		{
			name: "facebook",
			url: "https://facebook.com",
			img: FacebookLogo
		},
		{
			name: "instagram",
			url: "https://instagram.com",
			img: InstagramLogo
		},
		{
			name: "linkedin",
			url: "https://linkedin.com",
			img: LinkedinLogo
		},
		{
			name: "x",
			url: "https://x.com",
			img: XLogo
		},
	]

	return (
		<div className="flex flex-col md:gap-5 gap-2 mt-[60px]">
			<div className="flex gap-6 items-center justify-center h-10">
				{Socials.map((ele, _) => <a href={ele.url} target="_blank"><img src={ele.img} alt={ele.name} className="w-[27px] md:w-[40px]" /></a>)}
			</div>
			<p className="text-[#21243D] text-[14px] text-center">
				Copyright ©2020 All rights reserved
			</p>
		</div>
	)
}

export default Contact
