import React from "react"
import { HeroBox, HeroContainer } from "@/styles/heroStyle"
import { Hero } from "@/components/hero"

export default function Telemed() {

    const heroImg = "/telemedicine-mom-son-phone-1440x748.jpg.png"
    const heroText = "Our Telemedicine Program allows patients to connect with Childrens specialists from the comfort of their home through our virtual telemedicine visits.";

    return (
        <>
            <Hero img={heroImg} head="Telemedicine" text={heroText} />
            {/* <HeroContainer>
                <HeroBox>
                    <h2 
                    className="mb-5 text-#285844 text-4xl">Telemedicine</h2>
                    <p className="text-#5A5A5A">
                    Our Telemedicine Program allows patients to connect with Childrens specialists from the comfort of their home through our virtual telemedicine visits.
                    </p>
                </HeroBox>
            </HeroContainer> */}
        </>
    )
}