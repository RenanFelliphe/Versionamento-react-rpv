// Exercício 1: "Theme Toggle: Estado + Estilização (dark/light mode)"

import { useState } from "react"

export default function Ex01() {

    const [darkMode, setDarkMode] = useState<boolean>(false)
    console.log("Modo Escuro Ativado: ", darkMode)

    return(
        <>
            <div className={`h-screen w-full flex items-center justify-center ${darkMode ? "bg-[#0a0a0a] text-white" : "bg-[#ededed] text-black"}`}>
                <div className="scale-[2]">
                    <h1 className="text-[2rem] mb-5">
                        <span>Exercícios</span>
                        <span className="text-sky-500 font-bold"> 1</span>
                    </h1>        
                    <button className={`border border-zinc-400 px-5 py-2 rounded-xl cursor-pointer ${!darkMode ? "bg-[#0a0a0a] text-white" : "bg-[#ededed] text-black"}`} onClick={() => setDarkMode(!darkMode)}>
                        <span>Ativar Modo { darkMode ? "Escuro" : "Claro"}</span>
                    </button>
                </div>
            </div>
        </>
    )
}