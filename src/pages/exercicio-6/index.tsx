interface ICatalogoAnimes {
    id: string,
    catalogo: IAnime[]
}

interface IAnime {
    id: string,
    nome: string,
}

const catalogoAnimes: ICatalogoAnimes = {
    id: crypto.randomUUID(),
    catalogo: [
        {
            id: "1",
            nome: "Dragon Ball"
        },
        {
            id: "2",
            nome: "Naruto"
        },
        {
            id: "3",
            nome: "One Piece"
        },
        {
            id: "4",
            nome: "Bleach"
        },
        {
            id: "5",
            nome: "Kimetsu no Yaiba"
        },
        {
            id: "6",
            nome: "Boku no Hero"
        },
        {
            id: "7",
            nome: "Black Clover"
        },
        {
            id: "8",
            nome: "Saint Seiya"
        },
        {
            id: "9",
            nome: "Hunter x Hunter"
        },
        {
            id: "10",
            nome: "Shingeki no Kyojin"
        },
        {
            id: "11",
            nome: "Jujutsu Kaisen"
        },
        {
            id: "12",
            nome: "Death Note"
        }
    ]
}

export default function Ex06() {

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

                    <div className="grid grid-cols-6 gap-5">
                        {
                            catalogoAnimes.catalogo.map(element => {
                                return (
                                    <span className="col-span-2 border border-slate-400 rounded-xl py-2 px-10 cursor-pointer hover:shadow-md shadow-gray-500">{element.nome}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}