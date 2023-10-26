import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface AgentSummaryProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string,
  name: string,
  description: string
  uuid: string
}

export function AgentSummary({ name, uuid, description, imageUrl, ...rest }: AgentSummaryProps) {
  return (
    <div className="flex flex-col items-center text-center mx-auto gap-8" {...rest} >
      <header>
        <Image src={imageUrl} alt="Imagem do personagem em foco" width={450} height={450} className="w-[300px] h-[300px] md:w-full md:h-full" />
      </header>

      <main className="flex flex-col items-center gap-1 max-w-xs sm:max-w-lg" >
        <h1 className="text-3xl text-brand-white-200 font-mono font-bold" >{name}</h1>
        <p className="text-brand-white-300 font-semibold" >{description}</p>
      </main>

      <footer className="max-w-xs sm:max-w-sm sm:w-full" >
        <Link href={`/agent/${uuid}`} >
          <button className="w-full py-2 px-4 bg-brand-red-500 text-brand-white-100 font-bold uppercase rounded-sm transition-opacity hover:opacity-80" >Saiba mais</button>
        </Link>
      </footer>
    </div>
  )
}