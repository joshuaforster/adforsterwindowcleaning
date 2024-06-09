import React from "react";
import Hero from "../PageComponents/Hero";
import Steps from "../PageComponents/steps";
import Services from "../PageComponents/services";
import Location from "../PageComponents/Location";
import TestimonialSlider from "../PageComponents/Reviews";

export default function Home(){
    return(
        <>
            <Hero />
            <Steps />
            <Services />
            <Location />
            <TestimonialSlider/>
        </>
    )
}