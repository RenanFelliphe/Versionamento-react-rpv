import { useEffect, useState } from "react"

interface IUser {
    userId: number,
    id: number,
    title: string,
    completed: string
}

export default function Ex06() {

    const [users, setUser] = useState<any[]>([])
    const [numUser, setNumUser] = useState<number>(2)

    useEffect(() => {
        async function renderizaUsuarios() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            setUser(data.filter((user:IUser) => user.id <= 9))
        }

        renderizaUsuarios()
    })


    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen w-full">
                <h1 className="text-[2rem] fixed top-0 left-[50%] -translate-x-[50%] bg-[#0a0a0a] px-15 w-fit">
                    <span>Exercícios</span>
                    <span className="text-sky-500 font-bold"> 6</span>
                </h1>

                <div className="relative border border-slate-400 rounded-xl p-10 h-fit w-200 gap-5 flex flex-col items-center justify-center">
                    <h2 className="text-[2rem] absolute -top-6 left-[50%] -translate-x-[50%] bg-[#0a0a0a] px-15 w-fit whitespace-nowrap">Catálogo de Animes</h2>

                    <input type="search" className="border border-slate-400 rounded-xl py-1 px-5 w-full py-2 px-5" placeholder="Pesquisar anime..."/>

                    <div className="grid grid-cols-6 gap-5 pl-2">
                        {
                            users.length ? (users.map((user) => {
                                return (
                                    <div key={user.id} className="col-span-2 border border-slate-400 rounded-xl py-2 px-10 cursor-pointer hover:shadow-md shadow-gray-500">
                                        <p>Usuário: {user.id} - {user.title}</p>
                                    </div>
                                )
                                })) : (
                                    <p>Nenhum usuário registrado</p>
                                )
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}