import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'


export default function Ex03() {
    const userFormRules = z.object({
        email: z.string(),
        senha: z.string()
    })
    
    type IUserForm = z.infer<typeof userFormRules>
    
    const {
        register,
        handleSubmit,
        reset
        } = useForm <IUserForm>({
        resolver: zodResolver(userFormRules)
    })
    
    const submitUser = (data: IUserForm) => {
        console.log("Email: " + data.email)
        console.log("Senha: " + data.senha)
        reset()
    }
    
    return(
        <>
        <div className="h-screen w-full flex flex-col items-center justify-center gap-5">

        <h1 className="text-[2rem] px-15 w-fit flex gap-2 items-center justify-center">
            <span>Exercícios</span>
            <span className="text-sky-500 font-bold"> 3</span>
        </h1>   

        <form onSubmit={handleSubmit(submitUser)} className="relative border border-slate-400 rounded-xl h-fit flex flex-col items-center justify-center gap-10 p-10 pt-5 w-130">
            <h1 className="text-[2rem] w-full text-center">Login</h1>   
            <div className="flex flex-col gap-8 w-full">
                <div className="relative">
                    <label htmlFor="email" className="absolute -top-5 pl-2 text-sky-500 text-sm">E-mail</label>
                    <input type="text" id="email" placeholder="Digite o seu e-mail" { ...register("email") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                </div>
                <div className="relative">
                    <label htmlFor="senha" className="absolute -top-5 pl-2 text-sky-500 text-sm">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha" { ...register("senha") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                </div>
            </div>

            <div className="flex justify-end w-full gap-5">
                <button type="submit" className="border border-slate-400 rounded-xl px-8 py-1 cursor-pointer font-bold hover:text-green-400 hover:border-green-400 hover:transition-all duration-100">Enviar</button>
                <button type="reset" onSubmit={() => reset()} className="border border-slate-400 rounded-xl px-8 py-1 cursor-pointer font-bold hover:text-red-400 hover:border-red-400 hover:transition-all duration-100">Limpar</button>
            </div>    
        </form>  
        </div>
        </>
    )
}