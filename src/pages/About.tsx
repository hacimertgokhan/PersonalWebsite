import Navigation from "../components/Navigation.tsx";
import Body from "../components/about/Body.tsx";
import Header from "../components/about/Header.tsx";
import TechStacks from "../components/about/TechStacks.tsx";

export default function About() {
    return (
        <main className="bg-blue-500 w-screen h-screen flex overflow-hidden">
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