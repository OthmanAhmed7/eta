import { Suspense, lazy } from "react";

const Nav = lazy(() => import("../components/Nav"));
const Hero = lazy(() => import("../components/Hero"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Articles = lazy(() => import("../components/Articles"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const LastProjects = lazy(() => import("../components/LastProjects"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));

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
