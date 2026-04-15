import { useState } from "react"

interface ICounterHistory {
    id: number,
    counter: number
}

export default function Ex02() {

    const [counter, setCounter] = useState<number>(0)
    const [counterHistory, setCounterHistory] = useState<ICounterHistory[]>([])

    const saveCounter = (counter: number) => {
        const newCounter = {
            id: Date.now(),
            counter
        }

        setCounterHistory([...counterHistory, newCounter])
        setCounter(0)
        console.log(counterHistory)
    }

    return(
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
                <h1 className="text-[2rem]">
                    <span>Exercícios</span>
                    <span className="text-sky-500 font-bold"> 2</span>
                </h1>  
                <div className="text-[1.5rem] flex gap-15 border border-slate-300 w-fit rounded-xl overflow-hidden">
                    <button className="text-center border-r border-slate-400 px-5 py-2 cursor-pointer w-full h-full hover:bg-green-500" onClick={() => setCounter(counter + 1)}>+</button>
                    <p className="text-center flex items-center justify-center min-w-30">
                        {
                            counter == 0 ? "Contador" : (
                                counter
                            )
                        }
                    </p>
                    <button className="text-center border-l border-slate-400 px-5 py-2 cursor-pointer w-full h-full hover:bg-red-500" onClick={() => setCounter(counter - 1)}>-</button>
                </div>
                <button className="text-[1rem] flex gap-15 border border-slate-300 w-fit rounded-lg px-5 py-1 cursor-pointer" onClick={() => saveCounter(counter)}>Salvar Contador</button>
                {/* {
                    counterHistory.forEach((history) => {

                    })
                } */}
            </div>
        </>
    )
}