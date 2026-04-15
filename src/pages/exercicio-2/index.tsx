// Exercício 2: "Counter com Histórico: Estado (useState + lista)"

import { useEffect, useState } from "react"

interface ICounterHistory {
    id: number,
    counter: number
}

export default function Ex02() {
    const [counter, setCounter] = useState<number>(0)
    const [counterHistory, setCounterHistory] = useState<ICounterHistory[]>([])

    useEffect(() => {
        console.log("Contador: " + counter)
    }, [counter])
    
    const saveCounter = (counter: number) => {
        const newCounter = {
            id: Date.now(),
            counter: counter
        }

        setCounterHistory(oldState => [...oldState, newCounter])
        setCounter(0)
    }

    //Função criada por IA apenas para melhorar a exibição
    function formatDate(date: number | Date): string {
        const d = new Date(date)

        const day = String(d.getDate()).padStart(2, '0')
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const year = d.getFullYear()

        return `${day}/${month}/${year}`
    }

    return(
        <>
            <div className="h-screen w-full flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-[2rem]">
                        <span>Exercícios</span>
                        <span className="text-sky-500 font-bold"> 2</span>
                    </h1>  
                    <div className="text-[1.5rem] flex gap-15 border border-slate-300 w-fit rounded-xl overflow-hidden">
                        <button className="text-center border-r border-slate-400 px-5 py-2 cursor-pointer w-full h-full hover:bg-green-500" onClick={() => setCounter((counter + 1))}>+</button>
                        <p className="text-center flex items-center justify-center min-w-30">
                            {
                                counter == 0 ? "Contador" : (
                                    counter
                                )
                            }
                        </p>
                        <button className="text-center border-l border-slate-400 px-5 py-2 cursor-pointer w-full h-full hover:bg-red-500" onClick={() => setCounter((counter - 1))}>-</button>
                    </div>
                    <button className="text-[1rem] flex gap-15 border border-slate-300 w-fit rounded-lg px-5 py-1 cursor-pointer" onClick={() => saveCounter(counter)}>Salvar Contador</button>
                    <div className="relative border border-slate-400 rounded-xl p-5 w-full m-3">
                        <h1 className="absolute -top-3 px-10 bg-[#0a0a0a] text-sky-500 left-[50%] -translate-x-[50%]">Histórico</h1>
                        <ul className="list-disc pl-5">
                            {
                                counterHistory.length > 0 ? (
                                    counterHistory.map((history) => {
                                        return (
                                            <li key={history.id}>
                                                <p>{formatDate(history.id) + ": " + history.counter}</p>
                                            </li>
                                        )
                                    })
                                ) : ( 
                                    <p>Nenhum histórico salvo</p>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}