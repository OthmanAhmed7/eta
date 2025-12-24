"use client";

import LocomotiveScroll from "locomotive-scroll";
import { Suspense, lazy, useEffect } from "react";

const Nav = lazy(() => import("../components/Nav"));
const Hero = lazy(() => import("../components/Hero"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Articles = lazy(() => import("../components/Articles"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const LastProjects = lazy(() => import("../components/LastProjects"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
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
