import Navigation from "../components/Navigation.tsx";
export default function Certificates() {
    return (
        <main className="bg-slate-900 w-screen h-screen flex flex-col items-center overflow-hidden">
            <div className="w-screen h-96 relative flex items-center justify-center">
                <h1 className="text-6xl text-center text-sky-50 font-extrabold">Sertifikalarım</h1>
            </div>
            <div>
                <ul className="flex flex-row gap-10 justify-center flex-wrap">
                    <li className="bg-blue-900 shadow-2xl shadow-gray-950 w-96 h-52 rounded-sm relative">
                        <h1 className="text-center text-3xl font-extrabold text-sky-50 mt-10">SmallTalk</h1>
                        <p className="text-center text-sky-50 font-medium">English - B1 Seviye</p>
                        <a className="text-blue-900 w-72 p-1 cursor-pointer rounded-sm absolute left-0 right-0 m-auto bottom-10 bg-sky-50 flex items-center justify-center">Sertifikayı
                            görüntülemek için tıklayın</a>
                    </li>
                </ul>
            </div>
            <Navigation/>
        </main>
    );
}