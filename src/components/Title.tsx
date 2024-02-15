import {BsGithub, BsLinkedin, BsYoutube} from "react-icons/bs";
export default function Title() {

    return (
        <>
            <h1 className={"font-extrabold opacity-100 text-5xl text-blue-500"}>Hacı Mert Gökhan</h1>
            <h1 className={"text-3xl font-extrabold text-blue-400"}>Java & Frontend Web Developer</h1>
            <ul className="flex gap-6">
                <li className="text-3xl"><a className="flex items-center gap-0.5 text-slate-900 cursor-pointer hover:text-gray-900 font-medium transition-colors"><BsGithub/> Github</a></li>
                <li className="text-3xl"><a className="flex items-center gap-0.5 text-slate-900  cursor-pointer hover:text-blue-500 font-medium transition-colors"><BsLinkedin/> LinkedIn</a></li>
                <li className="text-3xl"><a className="flex items-center gap-0.5 text-slate-900  cursor-pointer hover:text-red-500 font-medium transition-colors"><BsYoutube/> Youtube</a></li>
            </ul>
        </>
    );
}