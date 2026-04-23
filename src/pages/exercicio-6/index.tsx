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
    const [currentUserName, setCurrentUserName] = useState<string>("")

    useEffect(() => {
        async function renderizaUsuarios() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            setUser(data.filter((user:IUser) => user.id <= 9))
        }

        renderizaUsuarios()
    }, [])


    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen w-full">
                <h1 className="text-[2rem] bg-[#0a0a0a] px-15 w-fit">
                    <span>Exercícios</span>
                    <span className="text-sky-500 font-bold"> 6</span>
                </h1>

                <div className="mt-10 relative border border-slate-400 rounded-xl p-10 h-fit w-200 gap-5 flex flex-col items-center justify-center">
                    <h2 className="text-[2rem] absolute -top-6 left-[50%] -translate-x-[50%] bg-[#0a0a0a] px-15 w-fit whitespace-nowrap">Busca e Filtro de Usuários</h2>
                    <input type="search" className="border border-slate-400 rounded-xl py-1 px-5 w-full py-2 px-5" placeholder="Pesquisar anime..." onChange={(e) => {setCurrentUserName(e.target.value)}}/>
                    <div className="grid grid-cols-6 gap-5 pl-2">
                        {
                            users.filter(user => 
                                user.title.toLowerCase().includes(currentUserName.toLowerCase())
                            ).map(user => (
                                <div key={user.id} className="col-span-2 border border-slate-400 rounded-xl py-2 px-10 cursor-pointer hover:shadow-md shadow-gray-500">
                                    <p className="text-center">Usuário: {user.id}</p>
                                    <p className="text-justify">Título: {user.title}</p>
                                </div>
                            ))
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}