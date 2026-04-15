import Link from "next/link";

//  Cada item abaixo deverá ser criado numa página separada dentro da pasta "pages"
const exercises = [
  {
    id: 1,
    title: "Theme Toggle",
    description: "Estado + Estilização (dark/light mode)"
  },
  {
    id: 2,
    title: "Counter com Histórico",
    description: "Estado (useState + lista)"
  },
  {
    id: 3,
    title: "Formulário de Login",
    description: "Formulários + Validação básica"
  },
  {
    id: 4,
    title: "Formulário de Cadastro",
    description: "Formulários + Validação avançada"
  },
  {
    id: 5,
    title: "Lista de Usuários",
    description: "Consumo de API (JSONPlaceholder)"
  },
  {
    id: 6,
    title: "Buscador com Filtro",
    description: "Estado + API + Estilização"
  },
  {
    id: 7,
    title: "Todo List",
    description: "Estado completo (CRUD) + Estilização"
  }
];

// Renderizar cada exercício como um card ( com link ) para a página na qual vocês irão desenvolver
// Sugestão de card 
// p-8 flex rounded-md border border-zinc-300

export default function Home() {

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-[2rem] p-5 text-bolder mb-5">RPV | Versionamento <span className="text-sky-500 font-bold">React</span></h1>

        <div className="relative">
          <h1 className="absolute -top-5 left-[50%] -translate-x-[50%] text-sky-500 bg-[#0a0a0a] px-15 w-fit text-[1.7rem] font-bold">Exercícios</h1>
          <div className="grid grid-cols-3 gap-5 border border-zinc-400 rounded-xl p-10">
            {exercises.map(exercicio => {
              return(
                <div className={`${exercicio.id == 7 ? "col-span-3" : "col-span-1"} border border-zinc-400 bg-slate-200/20 rounded-xl flex items-center justify-center hover:bg-sky-400/70 hover:transition-colors duration-100 hover:shadow-lg shadow-sky-900`}>
                  <Link href={`exercicio-${exercicio.id}`} className="text-center px-5 py-10"><p>{exercicio.title}</p></Link>
                </div>
              )
            })}
          </div>
        </div>
    </div>
    </>
  );
}
