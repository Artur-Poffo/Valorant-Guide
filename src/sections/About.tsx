"use client"

import { HeaderSection } from "@/components/UI/SectionHeader";
import Image from "next/image";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="px-4 mt-10">
            <HeaderSection title="Sobre o jogo" />

            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-12 flex flex-col md:flex-row items-center md:items-start justify-evenly"
            >
                <Image src={"/jett.png"} alt="Imagem de um dos personagens" width={400} height={400} />

                <div className="max-w-lg py-10 flex flex-col gap-4" >
                    <header>
                        <h3 className="font-bold font-mono text-xl text-brand-gray-500" >Desafie seus limites</h3>
                    </header>

                    <main className="flex flex-col gap-3" >
                        <p className="text-brand-gray-400 font-semibold" >Valorant é um renomado jogo de tiro tático desenvolvido pela Riot Games e lançado em 2020. Ele cativou uma ampla audiência graças à sua abordagem única que combina estratégia, trabalho em equipe e habilidades individuais.</p>
                        <p className="text-brand-gray-400 font-semibold" >No mundo de Valorant, os jogadores se dividem em duas equipes: atacantes e defensores. Os objetivos variam de acordo com o modo de jogo, mas geralmente envolvem a defesa ou a detonação de uma bomba. O elemento distintivo do jogo é a escolha de agentes, cada um com habilidades especiais únicas que podem ser usadas para obter vantagens táticas. Essas habilidades variam desde bloquear linhas de visão inimigas até curar aliados ou causar danos aos oponentes.</p>
                    </main>
                </div>
            </motion.div>
        </section>
    )
}