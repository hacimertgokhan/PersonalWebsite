import mert from '../../images/mert.jpeg';
import {GrSpotify} from "react-icons/gr";
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";

export default function Header() {
    return (
      <>
        <div className={"flex flex-row items-center justify-center flex-wrap"}>
            <img className={"rounded-md border-1 shadow-blue-700 h-48 w-48 mr-5"} src={mert} alt=""/>
            <span>
                <h1 className={"font-extrabold opacity-100 text-5xl text-sky-900"}>Hacı Mert Gökhan</h1>
                <ul className={"flex gap-12 mt-3 bg-sky-100 p-3 rounded-md text-3xl justify-center"}>
                    <li className="text-green-500 cursor-pointer hover:text-green-600 transition-colors">
                        <GrSpotify/>
                    </li>
                    <li className="text-red-500 cursor-pointer hover:text-red-600 transition-colors">
                        <BsYoutube/>
                    </li>
                    <li className="text-sky-500 cursor-pointer hover:text-sky-700 transition-colors">
                        <BsLinkedin/>
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-slate-900 transition-colors">
                        <BsGithub/>
                    </li>
                    <li className="text-pink-700 cursor-pointer hover:text-purple-500 transition-colors">
                        <BsInstagram/>
                    </li>
                </ul>
            </span>
        </div>
      </>
    );
}