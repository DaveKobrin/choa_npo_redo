import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";
import { Heading3Title, ParagText, ParagList } from "@/styles/textStyles";
import { About, EverythingText, Treatment, Photowrap, MoreButton, BtnTxt, SvgWrapper, SvgWrapper2, SeeMoreTxt, Transport, TreatmentHeader, EmergencyUrgent, ChildEmergency, Advanced } from "@/styles/emergencystyles";
import { SvgImg } from "@/components/svgImage";
import { Hero } from "@/components/hero";

import Patient from "../../public/patient.png"
import Image from "next/image";
import Link from "next/link";
import { LocationWaitCard } from "@/components/locationWaitCard";


export default  function EmergencyCare ()
{
    return(
    <>
       <Hero img="/pediatricgirl.png" alt="girl with dog" head="Emergency Care" text="When it comes to emergency care, Children’s treats serious or life-threatening illnesses, injuries and conditions for babies, children and teens of all ages."/>
       <Link href="/"> 
          <h2 className="p-5">Home - <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
  <path d="M5.16163 6.27688L0.64863 10.7899C0.50855 10.93 0.383696 11 0.274069 11C0.188803 11 0.121808 10.9589 0.073085 10.8767C0.0243617 10.7944 0 10.6772 0 10.5249V1.38932C0 1.23706 0.0243617 1.11982 0.073085 1.0376C0.121808 0.955376 0.188803 0.914266 0.274069 0.914266C0.383696 0.914266 0.50855 0.984305 0.64863 1.12438L5.16163 5.63739C5.2469 5.72265 5.28953 5.82923 5.28953 5.95713C5.28953 6.08503 5.2469 6.19161 5.16163 6.27688Z" fill="#00A94F"/>
</svg> Emergency Care</h2>
       </Link>
        {/* -- Wait Times Section -- */}
        <div className="flex flex-col w-full justify-center items-center mt-32 mb-20 ">
          <div className="max-w-[1800px] flex flex-row flex-wrap justify-center">
            {locationAndWaitTimes
              .filter((location) => {
                return location.facilityType === "Emergency Department";
              })
              .map((location, index) => (
                <div className="flex w-[43rem] m-4">
                  <LocationWaitCard location={location} />
                </div>
              ))}
            </div>
        </div>

    <About>

        <Photowrap>
            <Image src={Patient} height='284' width='284' alt="girl smiling"/>
        </Photowrap>

        <EverythingText>

        <Treatment>
            <TreatmentHeader>
                What do We Treat in Our Emergency Department
            </TreatmentHeader>

        <ParagText>
            The Emergency Departments at Children’s Healthcare of Atlanta serve children from birth to age 18 and are open 24 hours a day, seven days a week. No appointments are necessary to bring your baby, child or teen in.
        </ParagText>

        <ParagText>
            Call 911 immediately if you think your child’s illness or injury is life-threatening.
        </ParagText>
        {/* drop down goes here VVV */}
        <SvgWrapper >
        <span>What we treat</span><SvgImg iconName="downarrow"/>
        </SvgWrapper>
        
        </Treatment>

        <EmergencyUrgent>
            <Heading3Title>
                Emergency Department or Urgent Care Center?
            </Heading3Title>

            <ParagText>
                Learn more about when to take your child to the emergency department instead of an urgent care center.
            </ParagText>

            <MoreButton>
                <BtnTxt>Learn More</BtnTxt>
            </MoreButton>
        </EmergencyUrgent>

        <ChildEmergency>
            <Heading3Title>
                Why Should I Take My Child to a Children’s Emergency Department?
            </Heading3Title>

            <ParagText>
                Children are not small adults. Unlike most ERs, our pediatric Emergency Departments at Children’s have doctors and nurses who are board certified and specially trained in caring for children with urgent healthcare needs.
            </ParagText>

            <ParagText>
                Our equipment and supplies, from arm slings to blood pressure cuffs, are designed specifically for kids of all sizes, and we know how to make you and your child as comfortable as possible during a difficult time.
            </ParagText>
        </ChildEmergency>


        <Advanced>
            <Heading3Title>
                Advanced Trauma Care
                </Heading3Title>

            <ParagText>
                We combine advanced technology with dedicated, highly skilled physicians and staff to provide care for pediatric trauma patients:
            </ParagText>
            <SvgWrapper2>
                <SeeMoreTxt>
                    See More<SvgImg iconName="downarrow"/>
                </SeeMoreTxt> 
            </SvgWrapper2>
        </Advanced>

        <Transport>
            <Heading3Title>
                Transport Services
            </Heading3Title>

            <ParagText>
                When seconds count, Children’s has a pediatric-trained transport team to transfer critical patients to our
                three hospitals for treatment. Our transport team members have some of the most progressive training in the
                industry. They are trained to understand pediatric patients’ needs and the physical and emotional differences
                that make treating babies, children and teens unique.
            </ParagText>

            <SvgWrapper2>
                <SeeMoreTxt>
                    See More<SvgImg iconName="downarrow"/>
                </SeeMoreTxt> 
            </SvgWrapper2>            

            
        </Transport>
        
        {/* see more dropdown  */}

        {/* see more dropdownlist */}
        </EverythingText>

    </About>
</>
    )
}
