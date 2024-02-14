import onLoad, {techstack} from "../../types/TechStackLoader.ts";
onLoad();


export default function TechStacks() {
    return (
        <>
            <div>
                <ul className="flex flex-col h-screen w-10/12 gap-5 overflow-y-auto relative">
                    {
                        techstack.map((a) => {
                            return (
                                <li className="w-full h-32 group transition-all flex items-center cursor-pointer">
                                    <span className="text-5xl transition-all font-extrabold ml-10 group-hover:p-10">
                                        <h1 className={"text-slate-600 transition-all group-hover:text-sky-50 group-hover:text-6xl"}>{a.name}</h1>
                                    </span>
                                    <span className="text-5xl transition-all absolute group-hover:text-slate-50 right-8 text-slate-600 font-extrabold ml-10">
                                        <h1><span className="text-3xl">%</span>{a.val}</h1>
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}