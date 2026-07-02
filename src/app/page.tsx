import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

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
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
