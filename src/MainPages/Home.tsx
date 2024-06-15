import React from "react";
import Hero from "../PageComponents/Hero";
import Steps from "../PageComponents/steps";
import Services from "../PageComponents/services";
import Location from "../PageComponents/Location";
import TestimonialSlider from "../PageComponents/Reviews";
import HomeGallery from "../PageComponents/homegallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Steps />
      <HomeGallery />
      <Location />
      <TestimonialSlider />
    </>
  );
}