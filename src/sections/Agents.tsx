import { AgentSummary } from "@/components/UI/AgentSummary";
import { AgentsCarousel } from "@/components/UI/AgentsCarousel";
import { HeaderSection } from "@/components/UI/SectionHeader";
import { IAgent } from "@/interfaces/IAgent";
import { api } from "@/lib/axios";
import { AxiosResponse } from "axios";

export async function AgentsSection() {
  const {data: {data}}: AxiosResponse<{data: IAgent[]}> = await api.get('/agents', {
    params: {isPlayableCharacter: true}
  })
  
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f1923" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,218.7C480,203,600,181,720,192C840,203,960,245,1080,256C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <section id="agents" className={`overflow-hidden bg-gradient-to-tr from-[#90e3fdff] to-40% to-brand-gray-700 px-0 sm:px-4 pb-10 transition-colors`} >
        <HeaderSection title="Agentes" />

        <div className="mt-12 flex flex-col items-center" >
          <AgentsCarousel>
            {data.map(agent => {
              return (
                <AgentSummary name={agent.displayName} description={agent.description} imageUrl={agent.fullPortraitV2} uuid={agent.uuid} key={agent.uuid} />
              )
            })}
          </AgentsCarousel>
        </div>
      </section>
    </>
  )
}