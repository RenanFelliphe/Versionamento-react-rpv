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
      {exercises.map(exercicio => {

        return(
          <Link href={'exercicio-1'}><p>{exercicio.title}</p></Link>
        )
      })}
    </>
  );
}
