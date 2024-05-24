import Link from "next/link";
// import profile from "./profile.png";
import Image from "next/image";
import "./styles.css";
import fb from "@/assets/fb-small.png";
import insta from "@/assets/insta-small.png";

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-5 md:pt-12 text-white">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/5 flex justify-center">
                    <Link href="/">
                        {/* <h1>BuJo</h1> */}
                        <span className="text-5xl font-kalam text-white p-2 ml-2 md:ml-0 mb-5 md:mb-0 block">BuJo</span>
                    </Link>
                </div>
                <div className="flex justify-center w-full md:w-3/5 max-w-[900px] pb-5">
                    <nav className="">
                        <ul className="flex flex-col md:flex-row flex-wrap">
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">Contact us</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">Terms & Conditions</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">About us</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">Privacy Policy</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">Terms of use</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-inter text-sm"><Link className="hover:underline" href="/">Support</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-wrap md:w-1/4 bg-gray-800 gap-2 mt-0 md:mt-5 justify-center">
                    <a href="#" className=""><Image src={fb} alt="facebook" className="h-9 w-9" /></a>
                    <a href="#"><Image src={insta} alt="instagram" className="h-9 w-9" /></a>
                    <a href="#"><Image src={fb} alt="facebook" className="h-9 w-9" /></a>
                    <a href="#"><Image src={insta} alt="instagram" className="h-9 w-9" /></a>
                </div>
            </div>
            <div className="flex justify-center w-full mt-10">
                <span className="font-kalam text-xl">&copy; Copyright</span>
            </div>
        </footer>
    );
}
