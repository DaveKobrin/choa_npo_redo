import React from "react"
import { HeroBox, HeroContainer } from "@/styles/heroStyle"
import GreenBoxDD from "@/components/GreenBoxDD"
import Image from 'next/image';
import { Hero } from "@/components/hero"
import { TelemedContainer } from "@/styles/telemedStyles"

export default function Telemed() {

    const heroImg = "/telemedicine-mom-son-phone-1440x748.jpg.png"
    const heroText = "Our Telemedicine Program allows patients to connect with Childrens specialists from the comfort of their home through our virtual telemedicine visits.";

    return (
        <>
            <Hero img={heroImg} head="Telemedicine" text={heroText} />
            
            <div className="flex align-top m-2 ">
                <p className="text-green-600 tracking-widest">Home</p>
                <div className="w-0 h-0 mt-1.5 mr-2 ml-2
                    border-t-[6px] border-t-transparent
                    border-l-[7px] border-l-green-600
                    border-b-[6px] border-b-transparent">
                </div>

                <p className="tracking-widest">Telemedicine</p>
            </div>
            <TelemedContainer>
                <h2 className='text-4xl mb-10 text-[#285844]'>Starting Your Virtual Visit</h2>
                <GreenBoxDD text='MAKE YOUR VISRTUAL APPOINTMENT'/>
                <GreenBoxDD text='PREPARE FOR YOUR VIRTUAL APPOINTMENT'/>
                <GreenBoxDD text='FAQ'/>
        
                <h2 className='text-2xl mb-5 mt-10 text-[#285844]'>What Is Telemedicine?</h2>
                <p className="mt-3 text-[#5A5A5A]">Telemedicine allows clinicians to provide remote care to patients using audio and video technology. Being
                    able to deliver care remotely means patients can have access to the expertise of our pediatric specialists
                    without coming to a Children&apos;s Healthcare of Atlanta location.</p>
                <p className="mt-3 text-[#5A5A5A]">Your child&apos;s doctor will determine whether the appointment can be done online through a virtual visit. A
                    scheduler will contact you to discuss your options and explain the necessary steps to begin. If you&apos;re
                    interested in a virtual visit, contact your child&apos;s doctor.</p>
                <p className="mt-3 text-[#5A5A5A]">You must have a MYchart account in order to have a virtual visit with a Children&apos;s provider. Our schedulers
                    will need to help you start this process by sending you an activation email.</p>
            
                <p className='text-green-600 font-semibold mt-3'>Learn more about MYchart.</p>
                <p className='text-green-600 font-semibold mt-1'>Download a tip sheet on how to set up a MYchart account (en Español).</p>
                <h2 className='text-2xl mb-5 mt-10 text-[#285844]'>Virtual Appointment Checklist</h2>
                <ul >
                    <li className="bg-green-600 bg-opacity-20 mt-5 p-5">
                        <ul className="list-disc ml-5">
                            <li>Confirm your child&apos;s personal information.</li>
                        </ul>
                    </li>
                    <li className="bg-green-600 bg-opacity-20 mt-5 p-5">
                        <ul className="list-disc ml-5">
                            <li>Upload your child's insurance information. (You will only need to do this for your child's first visit.)</li>
                        </ul>
                    </li>
                    <li className="bg-green-600 bg-opacity-20 mt-5 p-5">
                        <ul className="list-disc ml-5">
                            <li>Complete a health history questionnaire for your child.</li>
                        </ul>
                    </li>
                    <li className="bg-green-600 bg-opacity-20 mt-5 p-5">
                        <ul className="list-disc ml-5">
                            <li>Sign e-consent forms:
                            <p>Consent Telehealth</p>
                            <span className="text-green-600 font-semibold">MYC Proxy Authorization Form(en Español)</span>
                            : This form allows us to confirm your identity as the
                            child's legal guardian in order to gain access to MYchart.
                            </li>
                        </ul>
                    </li>
                    
                </ul>
                <p className="font-semibold mt-5 mb-5">If not previously completed, we will need to confirm your identity as the child's legal guardian. You will
                    receive an email directing you to login to MYchart.</p>
                <div className="grid grid-cols-2 ">
                    <div >
                        <Image width={250} height={250} src="/mychart-icon-475x401.png.png" alt="document" />
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5 mt-3">Download a tip sheet on completing the
virtual visit eCheck-in</h2>
                        <div className="w-48">
                            <p className="text-green-600 mb-3">Mychart eCheck-in tip sheet</p>
                            <p className="text-green-600 mb-3">Mychart app eCheck-in tip sheet (en Español)</p>
                            <p className="text-green-600">Mychart desktop eCheck-in tip sheet (en Español)</p>
                            
                        </div>
                        
                    </div>
                </div>
            </TelemedContainer>

        </>
    )
}