import Navigation from "../components/Navigation.tsx";
import Body from "../components/about/Body.tsx";
import Header from "../components/about/Header.tsx";
import TechStacks from "../components/about/TechStacks.tsx";

export default function About() {
    return (
        <main className="flex overflow-hidden absolute inset-0 h-full w-full bg-white bg-[radial-gradient(lightblue_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-1/2 h-screen flex flex-col items-center justify-center">
                <span>
                    <Header/>
                </span>
                <span>
                    <Body/>
                </span>
            </div>
            <div className="w-1/2 bg-slate-900 h-screen">
                <span>
                    <TechStacks/>
                </span>
                <span>
                  <Navigation/>
                </span>
            </div>
        </main>
    );
}