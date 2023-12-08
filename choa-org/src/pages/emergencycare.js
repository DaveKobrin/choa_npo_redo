import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";
import { Heading3Title, ParagText, ParagList } from "@/styles/textStyles";
import { About, EverythingText, Treatment, Photowrap, MoreButton, BtnTxt, SvgWrapper } from "@/styles/emergencystyles";
import { SvgImg } from "@/components/svgImage";


import Patient from "../../public/patient.png"
import Image from "next/image";
import { LocationWaitCard } from "@/components/locationWaitCard";


export default  function EmergencyCare ()
{
    return(
    <>
       

         <div className="flex flex-col justify-center mt-32 mb-20">
          {locationAndWaitTimes
            .filter((location) => {
              return location.facilityType === "Emergency Department";
            })
            .map((location, index) => (
              <LocationWaitCard key={index} location={location} />
            ))}
        </div>
        
<About>

        <Photowrap>
            <Image src={Patient} height='284' width='284'/>
        </Photowrap>

        <EverythingText>

        <Treatment>
            <Heading3Title>
                What do We Treat in Our Emergency Department
            </Heading3Title>

        <ParagText>
            The Emergency Departments at Children’s Healthcare of Atlanta serve children from birth to age 18 and are open 24 hours a day, seven days a week. No appointments are necessary to bring your baby, child or teen in.
        </ParagText>

        <ParagText>
            Call 911 immediately if you think your child’s illness or injury is life-threatening.
        </ParagText>
        {/* drop down goes here VVV */}
        <SvgWrapper>
        <span>What we treat</span><SvgImg iconName="downarrow"/>
        </SvgWrapper>
        
        </Treatment>


        <Heading3Title>
            Emergency Department or Urgent Care Center?
        </Heading3Title>

        <ParagText>
            Learn more about when to take your child to the emergency department instead of an urgent care center.
        </ParagText>

        <MoreButton>
            <BtnTxt>Learn More</BtnTxt>
        </MoreButton>

        <Heading3Title>
            Why Should I Take My Child to a Children’s Emergency Department?
        </Heading3Title>

        <ParagText>
            Children are not small adults. Unlike most ERs, our pediatric Emergency Departments at Children’s have doctors and nurses who are board certified and specially trained in caring for children with urgent healthcare needs.
        </ParagText>

        <ParagText>
            Our equipment and supplies, from arm slings to blood pressure cuffs, are designed specifically for kids of all sizes, and we know how to make you and your child as comfortable as possible during a difficult time.
        </ParagText>

        <h3>Advanced Trauma Care</h3>

        <ParagText>
            We combine advanced technology with dedicated, highly skilled physicians and staff to provide care for pediatric trauma patients:
        </ParagText>

        <h3>Transport Services</h3>

        <ParagText>
        When seconds count, Children’s has a pediatric-trained transport team to transfer critical patients to our
        three hospitals for treatment. Our transport team members have some of the most progressive training in the
        industry. They are trained to understand pediatric patients’ needs and the physical and emotional differences
        that make treating babies, children and teens unique.
        </ParagText>

        {/* see more dropdown  */}

        {/* see more dropdownlist */}
        </EverythingText>

    </About>
</>
    )
}
