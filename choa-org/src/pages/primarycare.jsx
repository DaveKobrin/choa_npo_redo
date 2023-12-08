import { PageColors } from "@/styles/globalstyles";
import { Heading3Title, ParagText, ParagList } from "@/styles/textStyles";
import Button from "@/components/Button";
import Link from "next/link";
import { Hero } from "@/components/hero";

const primaryCare = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen">

        {/* Hero section */}
        <Hero img="/primary_care_hero_image.png"
          head="Primary Care"
          text="Whether your child is sick or due for a well-child visit,
          you can feel confident in knowing our Primary Care
          Clinic is here for your family."
          buText="Make an Appointment" />


        <Link href="/"> 
          <h5 className="p-5 flex tracking-widest"><span className="text-[#00A94F] ">Home</span> <img className="h-[12px] self-center mx-2" src="/Vector_babyarrow.png"/> Primary Care</h5>
       </Link>



          {/* Primary Services Section */}
        <div className="flex flex-col items-center mb-32">
          <div className="w-[800px]">
            <Heading3Title>
              Services Offered
            </Heading3Title>
            <div className="mt-10">
          
             
            </div>
          </div>
          </div>


        {/* Appointments */}
        <div className="flex flex-col items-center mb-32">
          <div className="w-[800px] mt-5">
            <Heading3Title>Scheduling Appointments</Heading3Title>
            <p className="text-#5A5A5A">Appointments are required to have your child seen in our Primary Care Clinic
            </p>
             <div className="m-1">
                <Button
                  text={"MAKE AN APPOINTMENT"}
                  bgColor={PageColors.BUTTON_GREEN}
                  textColor={PageColors.TEXT_WHITE}
                  borderRadius={"2.5rem"}
                  fontSize={"0.9375rem"}
                  padding={"1rem 2rem 1rem 2rem"}
                />
              </div>
          </div>

            <div className="w-[800px] mt-5">
            <Heading3Title>Appointment Cancellations</Heading3Title>
            <div className="mt-10">
              <ParagText>
                 Sign up for this online tool to help you access your child’s medical
                  records and securely communicate with your healthcare team.
              </ParagText>
            </div>
         </div>
        </div>

       {/* Team*/}
       <div className="flex flex-col items-center mb-32">
          <div className="w-[800px] mt-5">
            <Heading3Title>Meet Our Team</Heading3Title>
              <ParagText>
                Hughes Spalding Primary Care Clinic Team
              </ParagText>
                <span className="pl-9 text-[#00A94F] font-bold">
                  <ParagList>Melissa C. Adams, MD</ParagList>
                  <ParagList>Tamika Bryant, MD</ParagList>
                  <ParagList>Helen Evans, MD</ParagList>
                  <ParagList>Latasha Lanette Bogues, MD</ParagList>
                  <ParagList>Veda Johnson, MD, FAAP</ParagList>
                  <ParagList>Belise Livingston-Burns, MD, MPH, FAAP</ParagList>
                  <ParagList>Terri McFadden, MD</ParagList>
              </span>
              <ParagText>
                Some physicians and affiliated healthcare professionals who perform services at Children’s Healthcare of
                Atlanta are independent providers and not hospital employees.
              </ParagText>
              </div>
              </div>
              

          {/* MYchart Section */}
          <div className="flex flex-row w-full justify-center items-center">
              {/* Image */}
            <div className="">
              <img className="" src="primary_care_patientwithteddybear.png" alt="" />
            </div>
            <div className="w-[750px] mt-5">
            {/* Text */}
              <Heading3Title>
                What is my MYchart?
              </Heading3Title>
             
                <p> Sign up for this online tool to help you access your child’s medical
                  records and securely communicate with your healthcare team.</p>
                <div className="m-1">
                <Button
                  text={"LEARN MORE"}
                  bgColor={PageColors.BUTTON_GREEN}
                  textColor={PageColors.TEXT_WHITE}
                  borderRadius={"2.5rem"}
                  fontSize={"0.9375rem"}
                  padding={"1rem 2rem 1rem 2rem"}
                />
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default primaryCare;
