//Exercício 5: Lista de Usuários: Consumo de API (JSONPlaceholder)

import { useEffect, useState } from "react"

interface IUser {
    userId: number,
    id: number,
    title: string,
    completed: string
}

export default function Ex05() {
    const [users, setUser] = useState<any[]>([])
    const [numUser, setNumUser] = useState<number>(0)

    useEffect(() => {
        async function renderizaUsuarios() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            setUser(data.filter((user:IUser) => user.id <= numUser))
        }

        renderizaUsuarios()
    })

    return(

        <>
            <div className="w-full h-screen flex flex-col items-center gap-5 mt-10">
                <span className="text-[2rem]">Exercícios <span className="text-sky-500 font-bold"> 5</span></span>
                <div className="relative w-200 h-100 border rounded-xl border-slate-400 p-10 bg-white gap-5">
                    <p className="text-small">(Buscando usuários com o ID maior do que <span className="text-sky-500">{numUser!}</span>)</p>

                    <div className="flex gap-5">
                        <button className="border border-slate-400 rounded-xl py-1 px-5 cursor-pointer" onClick={() => setNumUser(numUser + 1)}>Aumentar ID</button>
                        <button className="border border-slate-400 rounded-xl py-1 px-5 cursor-pointer" onClick={() => setNumUser(numUser - 1)}>Diminuir ID</button>
                    </div>

                    <h1 className="text-[2rem]">Usuários Cadastrados</h1>
                    <ul className="list-disc pl-2">
                        {
                            users.length ? 
                            (users.map((user) => {
                                return (
                                    <li key={user.id} className="border-b border-b-slate-400 rounded-xl py-1 px-5">
                                        <p>Usuário: {user.id} - {user.title}</p>
                                    </li>
                                )
                                })) : (
                                    <p>Nenhum usuário registrado</p>
                                )
                            }
                    </ul>
                </div>
            </div>
        </>
    )
}