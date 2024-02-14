import {useEffect, useRef, useState} from "react";
let a:boolean = false;

export default function Welcome() {
    const listRef = useRef(null);
    const [Transform] = useState([
        `Kon\`nichiwa`,
        `Laba diena`,
        `Merhaba`,
        `Suas\`dei`,
        `Yah sahs`,
        `Bonjour`,
        `Salve`,
        `Tja`,
        `Dia duit`,
        `Namaste`,
        `Aloha`,
        `Privet`,
        `Zdravei`,
        `Namaskar`
    ]);
    useEffect(() => {
        setInterval(() => {
            if (a) {
                a=false;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                listRef.current.lastElementChild.scrollIntoView();
            } else {
                a=true;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                listRef.current.firstElementChild.scrollIntoView();
            }
        }, 2000)
    }, []);
    return (
        <>
            <div ref={listRef} className={`w-fit h-full flex ml-10 flex-col gap-2 overflow-y-auto `}>
                {Transform.map(a => {
                    return (
                        <h1 className="text-8xl font-extrabold text-slate-800 transition-all hover:text-sky-50 hover:p-5 cursor-pointer">{a} !</h1>
                    );
                })}
            </div>
        </>
    );
}
