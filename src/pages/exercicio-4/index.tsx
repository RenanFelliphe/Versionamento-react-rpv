//Exercício 4 - Formulário de Cadastro: Formulários + Validação avançada

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'


export default function Ex04() {
    const userFormRules = z.object({
        nome: z.string().min(3, "Campo Obrigatório"),
        idade: z.number("Idade Inválida").max(150, "Idade Inválida").positive("Idade Inválida"),
        email: z.email("Email inválido").min(1, "Campo Obrigatório"),
        senha: z
            .string()
            .min(1, "Campo Obrigatório")
            .refine((value) => value.length >= 8, {
                message: "Mínimo 8 caracteres"
            }),
        cpf: z
            .string()
            .min(1, "Campo Obrigatório")
            .regex(/^\d+$/, "Apenas números")
            .refine((value) => value.length === 11, {
                message: "CPF inválido"
            }),
        telefone: z
            .string()
            .min(1, "Campo Obrigatório")
            .regex(/^\d+$/, "Apenas números")
            .refine((value) => value.length === 11, {
                message: "Telefone inválido"
            }),        
        cep: z
            .string()
            .min(1, "Campo Obrigatório")
            .regex(/^\d+$/, "Apenas números")
            .refine((value) => value.length === 8, {
                message: "CEP inválido"
            }),
    })
    
    type IUserForm = z.infer<typeof userFormRules>
    
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
        } = useForm <IUserForm>({
        resolver: zodResolver(userFormRules)
    })
    
    const submitUser = (data: IUserForm) => {
        console.log(data)
        reset()
    }
    
    return(
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
                <h1 className="text-[2rem] px-15 w-fit flex gap-2 items-center justify-center">
                    <span>Exercícios</span>
                    <span className="text-sky-500 font-bold"> 4</span>
                </h1>   

                <form onSubmit={handleSubmit(submitUser)} className="relative border border-slate-400 rounded-xl h-fit grid grid-cols-6 items-center justify-center gap-y-11 gap-x-5 p-15 pt-10 w-200">
                    <h1 className="text-[2rem] w-full text-center col-span-6">Registro</h1>   
                    
                    <div className="col-span-5 relative">
                        <label htmlFor="nome" className="absolute -top-5 pl-2 text-sky-500 text-sm">Nome Completo</label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" { ...register("nome") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.nome && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.nome.message} </p>}
                    </div>
                    <div className="col-span-1 relative">
                        <label htmlFor="idade" className="absolute -top-5 pl-2 text-sky-500 text-sm">Idade</label>
                        <input type="number" id="idade" placeholder="..." { ...register("idade", { valueAsNumber: true }) } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.idade && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.idade.message} </p>}
                        
                    </div>
                    <div className="col-span-3 relative">
                        <label htmlFor="email" className="absolute -top-5 pl-2 text-sky-500 text-sm">E-mail</label>
                        <input type="text" id="email" placeholder="Digite o seu e-mail" { ...register("email") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.email && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.email.message} </p>}
                    </div>
                    <div className="col-span-3 relative">
                        <label htmlFor="senha" className="absolute -top-5 pl-2 text-sky-500 text-sm">Senha</label>
                        <input type="password" id="senha" placeholder="Digite a sua senha" { ...register("senha") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.senha && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.senha.message} </p>}
                    </div>
                    <div className="col-span-2 relative">
                        <label htmlFor="cpf" className="absolute -top-5 pl-2 text-sky-500 text-sm">CPF</label>
                        <input type="number" id="cpf" placeholder="Digite o seu CPF" { ...register("cpf") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.cpf && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.cpf.message} </p>}
                    </div>
                    <div className="col-span-2 relative">
                        <label htmlFor="telefone" className="absolute -top-5 pl-2 text-sky-500 text-sm">Telefone</label>
                        <input type="number" id="telefone" placeholder="Digite o seu telefone" { ...register("telefone") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.telefone && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.telefone.message} </p>}
                    </div>
                    <div className="col-span-2 relative">
                        <label htmlFor="cep" className="absolute -top-5 pl-2 text-sky-500 text-sm">CEP</label>
                        <input type="number" id="cep" placeholder="Digite o seu CEP" { ...register("cep") } className="border outline-none border-slate-400 rounded-xl w-full py-2 px-5"/>
                        {errors.cep && <p className="whitespace-nowrap text-red-500 text-sm absolute -bottom-5 left-0 pl-2"> {errors.cep.message} </p>}
                    </div>
                    <div className="col-span-6 flex justify-end w-full gap-5">
                        <button type="submit" className="border border-slate-400 rounded-xl px-8 py-1 cursor-pointer font-bold hover:text-green-400 hover:border-green-400 hover:transition-all duration-100">Enviar</button>
                        <button type="reset" onSubmit={() => reset()} className="border border-slate-400 rounded-xl px-8 py-1 cursor-pointer font-bold hover:text-red-400 hover:border-red-400 hover:transition-all duration-100">Limpar</button>
                    </div>    
                </form>  
            </div>
        </>
    )
}