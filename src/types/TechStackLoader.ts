export const techstack:string[] = [];

const add = (name:string, value:number) => {
    const tech = {
        name: name,
        val: value,
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    techstack.push(tech);
}

export default function onLoad() {
    add("Java", 80);
    add("HTML5", 90);
    add("Css3", 90);
    add("Sass", 80);
    add("Tailwind", 70);
    add("JavaScript", 80);
    add("TypeScript", 40);
    add("MySql", 70);
    add("Tauri", 80);
    add("Electron", 70);
    add("React", 80);
    add("Vite", 70);
    add("NextJS", 70);
    add("CPanel", 80);
    add("Plesk", 80);
    add("PhpMyAdmin", 70);
    add("Hosting Kullanımı", 70);
    add("GitHub", 100);
    add("Maven", 70);
}

