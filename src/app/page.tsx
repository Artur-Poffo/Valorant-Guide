import { PageWrapper } from "@/components/Navigation/PageWrapper";
import { AboutSection } from "@/sections/About";
import { AgentsSection } from "@/sections/Agents";
import { HomeSection } from "@/sections/Home";

export default function Home() {
  return (
    <PageWrapper>
      <HomeSection />
      <AboutSection />
      <AgentsSection />
    </PageWrapper>
  )
}
