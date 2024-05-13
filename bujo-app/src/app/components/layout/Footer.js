import Link from "next/link";
// import profile from "./profile.png";
import Image from "next/image";
import "./styles.css";
import fb from "@/assets/fb-small.png";
import insta from "@/assets/insta-small.png";

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-5">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/5 flex justify-start md:justify-center items-center h-32">
                    <Link href="/"><h1>BuJo</h1></Link>
                </div>
                <div className="flex flex-wrap content-start w-full md:w-3/5 max-w-[900px] p-5">
                <nav className="w-full">
                        <ul className="flex flex-wrap content-start w-full">
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">Contact us</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">Terms & Conditions</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">About us</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">Privacy Policy</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">Support</Link></li>
                            <li className="w-full md:w-1/2 pb-3 font-kalam text-xl"><Link className="hover:underline" href="/">Terms of use</Link></li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-wrap w-full md:w-1/4 bg-gray-800 gap-2">
                    <a href="#"><Image src={fb} alt="facebook" className="h-12 w-12" /></a>
                    <a href="#"><Image src={insta} alt="instagram" className="h-12 w-12" /></a>
                    <a href="#"><Image src={fb} alt="facebook" className="h-12 w-12" /></a>
                    <a href="#"><Image src={insta} alt="instagram" className="h-12 w-12" /></a>
                    <a href="#"><Image src={fb} alt="facebook" className="h-12 w-12" /></a>
                    <a href="#"><Image src={insta} alt="instagram" className="h-12 w-12" /></a>
                </div>
            </div>
            <div className="flex justify-center w-full my-3">
                <span className="font-kalam text-xl">&copy; Copyright</span>
            </div>
        </footer>
    );
}
