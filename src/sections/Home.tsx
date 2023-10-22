export function HomeSection() {
  return (
    <section id="home" className="w-full h-screen bg-brand-gray-800 relative flex items-center justify-center" >
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-screen object-cover opacity-30">
        <source src="/valorant-video.mp4" />
      </video>

      <div className="z-10 flex flex-col items-center text-center gap-2" >
        <h1 className="text-7xl uppercase tracking-wider font-mono font-bold text-brand-red-500" >Valorant</h1>
        <span className="text-brand-white-200" >Uma jogo de tiro tático 5x5 com personagens originais</span>
      </div>
    </section>
  )
}