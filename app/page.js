import AboutUs from "@/components/AboutUs";
import Articles from "@/components/Articles";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import LastProjects from "@/components/LastProjects";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutUs />
      <LastProjects />
      <Services />
      <Articles />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
