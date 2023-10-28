import { DefaultTooltip } from "@/components/UI/DefaultTooltip"
import { IAgent } from "@/interfaces/IAgent"
import { api } from "@/lib/axios"
import { AxiosResponse } from "axios"
import Image from "next/image"

interface AgentProps {
    params: {
        id: string
    }
}

export default async function Agent({ params: { id } }: AgentProps) {
    const { data: { data: agent } }: AxiosResponse<{ data: IAgent }> = await api.get(`agents/${id}`)

    return (
        <section id="agent" className="w-full min-h-screen px-4 pt-20 pb-5 sm:pt-32 bg-brand-gray-700 flex justify-center" >
            <article className="max-w-xl flex flex-col items-center gap-4" >
                <header className="flex flex-col items-center text-center gap-1" >
                    <h1 className="text-4xl text-brand-red-500 uppercase tracking-widest font-mono font-bold" >{agent.displayName}</h1>
                    <span className="text-sm font-bold text-brand-red-500" >{agent.role.displayName}</span>
                    <Image src={agent.fullPortrait} alt="Imagem do agente" width={600} height={600} />
                </header>

                <main className="flex flex-col gap-2" >
                    <p className="text-brand-white-300" >{agent.description}</p>
                    <h2 className="text-2xl text-brand-white-200 font-bold font-mono" >Habilidades:</h2>
                    <ul className="flex items-center justify-between mt-4 gap-5" >
                        {agent.abilities.map(ability => {
                            return (
                                <li className="cursor-pointer" key={ability.displayName} >
                                    <DefaultTooltip title={ability.displayName} text={ability.description}>
                                        <Image src={ability.displayIcon} alt="Ícone da habilidade" width={50} height={50} />
                                    </DefaultTooltip>
                                </li>
                            )
                        })}
                    </ul>
                </main>
            </article>
        </section>
    )
}