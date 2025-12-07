import { Suspense, lazy } from "react";

const AboutUs = lazy(() => import("../components/AboutUs"));
const Articles = lazy(() => import("../components/Articles"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const LastProjects = lazy(() => import("../components/LastProjects"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Nav />
      <Hero />
      <AboutUs />
      <LastProjects />
      <Services />
      <Articles />
      <Testimonials />
      <ContactUs />
    </Suspense>
  );
}
