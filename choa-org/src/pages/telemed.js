import React from "react"
import { HeroBox, HeroContainer } from "@/styles/heroStyle"

export default function Telemed() {
    return (
        <>
            <HeroContainer>
                <HeroBox>
                    <h2 
                    className="mb-5 text-#285844 text-4xl">Telemedicine</h2>
                    <p className="text-#5A5A5A">
                    Our Telemedicine Program allows patients to connect with Childrens specialists from the comfort of their home through our virtual telemedicine visits.
                    </p>
                </HeroBox>
            </HeroContainer>
            <div className="m-50">
                <h4>Starting Your Virtual Visit</h4>
                <GreenBox text='Before a Virtual Visit'/>
                <GreenBox text='Plan your visit'/>
                <h4>Questions About Virtual Visits</h4>
            </div>
        </>
    )
}