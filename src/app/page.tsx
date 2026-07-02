import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Projects />
      </main>
    </>
  );
}
