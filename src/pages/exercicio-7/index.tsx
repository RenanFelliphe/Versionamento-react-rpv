interface ITaskList {
    id: string,
    tasks: ITask[]
}

interface ITask {
    id: string,
    title: string,
    priority: "Muito Alta" | "Alta" | "Média" | "Baixa" | "Muito Baixa"
}

export default function Ex07() {

    return(
        <>
            <div className="h-screen h-full flex flex-col items-center justify-center gap-5">
                <h1 className="text-[2rem] px-15 w-fit">
                    <span>Exercícios</span>
                    <span className="text-sky-500 font-bold"> 7</span>
                </h1>
                <form className="border border-slate-400 rounded-xl p-10 gap-10 grid grid-cols-4 w-200 mb-6">
                    <div className="col-span-3 relative border border-slate-400 rounded-xl">
                        <label htmlFor="taskTitle" className="absolute -top-6 left-2 text-sm text-sky-500">Título</label>
                        <input type="text" id="taskTitle" placeholder="Digite o título da tarefa..." className="outline-none w-full py-2 px-5"/>
                    </div>
                    <div className="col-span-1 relative border border-slate-400 rounded-xl flex pr-2">
                        <label htmlFor="selectPriotity" className="absolute -top-6 left-2 text-sm text-sky-500">Prioridade</label>
                        <select id="selectPriotity" className="outline-none rounded-xl w-full px-5 py-2 bg-[#0a0a0a] cursor-pointer">
                            <option value="-">Selecionar</option>
                            <option value="100">Muito Alta</option>
                            <option value="75">Alta</option>
                            <option value="50">Média</option>
                            <option value="25">Baixa</option>
                            <option value="0">Muito Baixa</option>
                        </select>
                    </div>

                    <button type="submit" className="col-span-4 border border-slate-400 rounded-xl py-2 px-5 cursor-pointer hover:text-green-400 hover:border-green-400 duration-all-200">Adicionar Tarefa</button>
                </form>

                <div className="relative border border-slate-400 rounded-xl p-10 w-200">
                    <span className="absolute w-full border-t border-t-slate-400 -top-6 left-0"></span>
                    <h1 className="text-[1.5rem]">Lista de Tarefas</h1>

                    {
                        <p className="text-slate-500 text-sm">Nenhuma Tarefa Adicionada</p>
                    }
                </div>
            </div>
        </>
    )
}