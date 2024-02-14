export default function Body() {
    return (
      <div className="w-full flex-col justify-center flex flex-wrap items-center">
        <div className={"w-9/12 text-sky-50 text-xl mt-10 font-medium"}>
            <p>Merhaba ! ben Mert, 18 yaşındayım. Kırşehir Ahi Evran Üniversitesinde okuyorum. Astronomi, Yazılım ve Felsefe ile ilgileniyor, bu konularda araştırmalar yapıyorum. 7 yaşında bilgisayar kullanmaya, 13 yaşımda yazılıma başladım. Java, Javascript, HTML, Css, Tailwind, Sass, React, Next, Vite, Tauri, Electron, MySql dil ve kütüphanelerini kolaylıkla kullanabiliyorum.</p>
        </div>
          <div className="mt-24">
              <a className="text-2xl transition-colors cursor-pointer hover:text-blue-700 font-extrabold text-blue-500 bg-sky-50 p-3 rounded-md">Özgeçmişimi inceleyin</a>
          </div>
      </div>
    );
}