import AboutUs from "@/components/AboutUs";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import LastProjects from "@/components/LastProjects";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutUs />
      <LastProjects />
      <Services />
      <Events />
    </div>
  );
}
