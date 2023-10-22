import Image from "next/image";
import Link from "next/link";

export function AgentSummary() {
  return (
    <div className="flex flex-col items-center text-center mx-auto gap-8" >
      <header>
        <Image src={'/jett.png'} alt="Imagem do personagem em foco" width={350} height={350} className="w-[300px] h-[300px] md:w-full md:h-full" />
      </header>

      <main className="flex flex-col items-center gap-1 max-w-xs sm:max-w-lg" >
        <h1 className="text-3xl text-brand-white-100 font-mono font-bold" >Jett</h1>
        <p className="text-brand-white-200 font-semibold" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque quaerat repudiandae iure minima dignissimos, facere ea sequi velit vero.</p>
      </main>

      <footer className="max-w-xs sm:max-w-sm sm:w-full" >
        <Link href={'/'} >
          <button className="w-full py-2 px-4 bg-brand-red-500 text-brand-white-100 font-bold uppercase rounded-sm transition-opacity hover:opacity-80" >Saiba mais</button>
        </Link>
      </footer>
    </div>
  )
}