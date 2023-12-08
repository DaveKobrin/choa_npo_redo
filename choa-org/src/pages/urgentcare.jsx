import { PageColors } from "@/styles/globalstyles";
import { Heading3Title, ParagText, ParagList } from "@/styles/textStyles";
import { conditionSeverity } from "../data/conditionSeverity";
import Button from "@/components/Button";
import { LocationWaitCard } from "@/components/locationWaitCard";
import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";
import { Hero } from "@/components/hero";

const urgentCare = () => {
  return (
    <>
      <div className="max-w-screen min-h-screen">
        {/* Hero section */}
        <Hero img="/urgent_care_hero_image.png"
          alt="smiling child"
          head="Urgent Care"
          text="Our pediatric Urgent Care Centers are staffed seven days a week
          with doctors and nurses who are specially trained to treat
          non-life-threatening illnesses in children and teens." />

        <h5 className="p-5 flex tracking-widest"><span className="text-[#00A94F] ">Home</span> <img className="h-[12px] self-center mx-2" src="/Vector_babyarrow.png"/> Urgent Care</h5>

        {/* -- Wait Times Section -- */}
        <div className="flex flex-col w-full justify-center items-center mt-32 mb-5 ">
          <div className="max-w-[1600px] flex flex-row flex-wrap justify-center">
            {locationAndWaitTimes
              .filter((location) => {
                return location.facilityType === "Urgent Care Center";
              })
              .map((location, index) => (
                <div className="flex w-[42rem] m-4">
                  <LocationWaitCard location={location} />
                </div>
              ))}
            </div>
        </div>
        <div className="w-[800px] mx-20 mb-20">
              <p className="">Our <span className="text-[#00A94F] font-bold">Emergency Departments</span> are open 24 hours a day, seven days a week, when your child has a serious or life-threatening condition.</p>
              <p className="">In case of an urgent concern or emergency, call 911 or go to the nearest emergency department right away.</p>
          </div>

        {/* Bottom Section / Explanation Section */}
        <div className="flex flex-col mb-32">
          {/* Urgent Care or Emergency Section */}
          

          {/* Table */}
          <div className="max-w-[65vw] mt-5 m-20">
          <h3 className="text-[#C4489F] text-[1.625rem] mb-10 font-semibold">Does your child require Urgent Care or the Emergency Department?</h3>
            <table className="min-w-full bg-white border-2 border-black">
              <thead>
                <tr className="text-left">
                  <th className="py-1 px-4 border-black border-2">
                    Conditions*
                  </th>
                  <th className="py-1 px-4 text-center border-black border-2">
                    Urgent Care Center
                  </th>
                  <th className="py-1 px-4 text-center border-black border-2">
                    Emergency Department
                  </th>
                </tr>
              </thead>
              <tbody>
                {conditionSeverity.map((condition, index) => (
                  <tr>
                    <td className="w-8/12 py-1 px-2 border-[#B3ADAD] border">
                      {condition.condition}
                    </td>
                    <td className="w-2/12 py-1 border-[#B3ADAD] border text-center">
                      {condition.facility === "Urgent Care" ? "✘" : ""}
                    </td>
                    <td className="w-2/12 py-1 border-[#B3ADAD] border text-center">
                      {condition.facility === "Emergency Department" ? "✘" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex w-full my-10">
              <div className="m-1">
                <Button
                  text={"DOWNLOAD CHART"}
                  bgColor={PageColors.BUTTON_GREEN}
                  textColor={PageColors.TEXT_WHITE}
                  borderRadius={"2.5rem"}
                  fontSize={"0.9375rem"}
                  padding={"1.1875rem 2.8625rem 1.1875rem 2.875rem"}
                />
              </div>
              <div className="m-1">
                <Button
                  text={"DOWNLOAD CHART (EN ESPAÑOL)"}
                  bgColor={PageColors.BUTTON_GREEN}
                  textColor={PageColors.TEXT_WHITE}
                  borderRadius={"2.5rem"}
                  fontSize={"0.9375rem"}
                  padding={"1.1875rem 2.8625rem 1.1875rem 2.875rem"}
                />
              </div>
            </div>
          </div>


          <div className="flex justify-around w-full flex-row mt-5 mx-20 pr-32 mb-20">
            {/* Urgent Care Hours */}
             <div className="w-5/12 self-start">
                  <h4 className="text-[1.5rem]">Urgent Care Hours</h4>
                  <p className="mt-4">no appointment is necessary, and walk-ins are welcome</p>
                  <div className="my-5">
                    <p className="font-medium">Monday-Friday: 11 a.m. to 9 p.m.</p>
                    <p className="font-medium">Saturday and Sunday: 9 a.m. to 7 p.m.</p>
                    <p className="font-medium">Holidays: 9 a.m. to 7 p.m.</p>
                  </div>
                  <p className="w-9/12">Holidays include New Year's Day, Martin Luther King Jr. Day, Memorial Day, Fourth of July, Labor Day, Thanksgiving and Christmas Day.</p>
             </div>
             {/* Holiday Hours Locations */}
            <div className="self-start">
                  <h4 className="text-[1.5rem] ">Holiday Hours Offered at:</h4>
                  <p className="mt-3">Children’s at Chamblee-Brookhaven</p>
                  <p>Children’s at Forsyth</p>
                  <p>Children’s at Hudson Bridge</p>
                  <p>Children’s at Satellite Boulevard</p>
                  <p>Children’s at Town Center</p>
                  <p className="mt-3">Hours may be affected by unanticipated circumstances. </p>
            </div>
            
          </div>
          {/* Why Section */}
          <div className="flex flex-row w-full justify-center items-center mx-28">
            {/* Text */}
            <div className="max-w-[45rem] mt-5 mx-7">
              <h3 className="text-black text-[1.625rem] leading-8">
                Why Should You Take Your Child to a Pediatric Urgent Care
                Center?
              </h3>
              <ul className="list-disc max-w-[36.1875rem] mt-5 ml-8 ">
                <li className="mt-1">Urgent care is ideal for non-life-threatening injuries or illnesses, such as minor cuts, sprains, or common colds.</li>
                <li className="mt-1">Wait times are decreased by urgent care clinics' convenient walk-in services and longer hours.</li>
                <li className="mt-1">Accessible for non-emergency situations that require prompt attention but do not pose an immediate threat to life.</li>
                <li className="mt-1">If you have less serious health concerns, urgent care visits can be a more cost-effective option than emergency hospital appointments.</li>
              </ul>
            </div>
            <div className="">
              <img className="" src="doctor_and_child.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default urgentCare;
