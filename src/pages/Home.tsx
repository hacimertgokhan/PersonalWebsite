import Title from "../components/Title.tsx";
import Navigation from "../components/Navigation.tsx";
import Welcome from "../components/Welcome.tsx";

export default function Home() {
    return (
        <main className="bg-blue-500 w-screen h-screen flex overflow-hidden">
            <div className="w-1/2 h-screen flex items-center justify-center">
              <span>
                <Title/>
              </span>
            </div>
            <div className="w-1/2 bg-slate-900 h-screen">
                <span>
                    <Welcome/>
                </span>
                <span>
                  <Navigation/>
                </span>
            </div>
        </main>
    );
}