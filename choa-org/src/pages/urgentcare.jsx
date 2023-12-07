import Map from '../components/Maps'
import { PageColors } from '@/styles/globalstyles';
import { Heading3Title } from '@/styles/textStyles';
import {conditionSeverity} from '../data/conditionSeverity'
import Button from '@/components/Button';

const urgentCare = () => {
    return (
      <>
        <div className="min-w-screen min-h-screen">
            
            <h2 className="p-5">Home - Urgent Care</h2>
            {/* Hero section */}
            <div className="relative">
                <img className="w-full" src='/urgent_care_hero_image.png' alt="smiling child" />
                {/* Text overlay */}
                <div className="w-2/4 absolute top-1/2 right-1/2 transform translate-x-16 -translate-y-14 p-20 bg-white rounded bg-opacity-90">
                    <h2>Urgent Care</h2>
                    <p>Our pediatric Urgent Care Centers are staffed seven days a week with doctors and nurses who are specially trained to treat non-life-threatening illnesses in children and teens.</p>
                </div>
            </div>


            {/* -- Wait Times Section -- */}
            <div className="flex justify-center mt-32 mb-20">

                {/* placeholder for wait times component */}
                <div className="bg-gray-500 w-9/12 h-[900px]"></div>

            </div>

            {/* ------------------------ */}

            {/* Bottom Section / Explanation Section */}
            <div className="flex flex-col items-center mb-32">
                {/* Urgent Care or Emergency Section */}
                <div className="w-[750px]">
                    <Heading3Title>Should My Child Go to Urgent Care or the Emergency Department?</Heading3Title>
                    <p>When injuries and illnesses happen, it’s important to know where to take your child.</p>
                    <p>When your child has a minor injury or illness and your family’s pediatrician is not available, our Urgent Care Centers are here for you, especially on evenings, weekends and holidays.</p>
                    <p>Our Emergency Departments are open 24 hours a day, seven days a week, when your child has a serious or life-threatening condition.</p>
                    <p>In case of an urgent concern or emergency, call 911 or go to the nearest emergency department right away.</p>
                    <p>To help you decide if your child needs urgent care or emergency services, use the chart below.</p>
                </div>
                {/* Table Intro*/}
                <div className="w-[750px] mt">
                    <p>Find your child’s condition in the list on the right.</p>
                    <p>On the same line, find the ✘ in one of the columns to the right of the condition. The ✘ will show you if you should take your child to our Urgent Care Center or Emergency Department.</p>
                </div>
                {/* Table */}
                <div className="container mx-auto p-4">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="text-left">
                                <th className="py-1 px-4 border-[#B3ADAD] border-b">Conditions*</th>
                                <th className="py-1 px-4 border-[#B3ADAD] border-b">Urgent Care Center</th>
                                <th className="py-1 px-4 border-[#B3ADAD] border-b">Emergency Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conditionSeverity.map((condition, index) => (
                            <tr>
                                <td className="w-8/12 py-1 px-2 border-[#B3ADAD] border">{condition.condition}</td>
                                <td className="w-2/12 py-1 border-[#B3ADAD] border text-center">{ condition.facility==='Urgent Care' ? "✘" : "" }</td>
                                <td className="w-2/12 py-1 border-[#B3ADAD] border text-center">{ condition.facility==='Emergency Department' ? "✘" : "" }</td>
                            </tr>
                            ) )}
                        </tbody>
                    </table>
                    <div className="flex justify-center w-full my-10">
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
                            <Button text={"DOWNLOAD CHART (EN ESPAÑOL)"}
                                bgColor={PageColors.BUTTON_GREEN}
                                textColor={PageColors.TEXT_WHITE}
                                borderRadius={"2.5rem"}
                                fontSize={"0.9375rem"}
                                padding={"1.1875rem 2.8625rem 1.1875rem 2.875rem"}
                            />
                        </div>
                    </div>
                </div>
            

            {/* Urgent Care Hours */}
            <div>
                <Heading3Title>When Is Children’s Urgent Care Open?</Heading3Title>
                <p>At our pediatric Urgent Care Centers, no appointment is necessary, and walk-ins are welcome. We’re open seven days a week, including evenings and holidays.</p>
                <p>Monday-Friday: 11 a.m. to 9 p.m.</p>
                <p>Saturday and Sunday: 9 a.m. to 7 p.m.</p>
                <p>Holidays: 9 a.m. to 7 p.m.</p>
                <p>Holidays include New Year's Day, Martin Luther King Jr. Day, Memorial Day, Fourth of July, Labor Day,Thanksgiving and Christmas Day.</p>
                <p>We offer holiday hours at the following Urgent Care Centers:</p>
                <p>Children’s at Chamblee-Brookhaven</p>
                <p>Children’s at Forsyth</p>
                <p>Children’s at Hudson Bridge</p>
                <p>Children’s at Satellite Boulevard</p>
                <p>Children’s at Town Center</p>
                <p>Hours may be affected by unanticipated circumstances. Check this webpage for real-time updates. </p>
            </div>
            {/* Why Section */}
            <div>  
                <Heading3Title>Why Should You Take Your Child to a Pediatric Urgent Care Center?</Heading3Title>
                <p>Children are not small adults. Unlike most urgent care centers and retail clinics, our pediatric Urgent Care Centers have doctors and nurses who are specially trained to diagnose and treat your growing child or teen. Our doctors can communicate directly with your child’s doctor, informing him or her of any test results or procedures that were performed so the doctor can update your child’s medical records and provide follow-
                up care, if needed.</p>
                <p>Our pediatric Urgent Care Centers offer:</p>
                <p>A pediatrician on staff</p>
                <p>Staff specially trained to diagnose and treat children from birth to 18 years old</p>
                <p>Walk-in hours seven days a week, including evenings and holidays</p>
                <p>Lab and X-ray services to quickly diagnose your child’s minor illnesses and injuries with up to 50 percent</p>
                <p>less radiation than some adult facilities</p>
                <p><span className="text-[#00A94F] font-bold">Fracture care</span> for growing bones, with access to pediatric orthopedic specialists</p>
                <p>Access to the Children’s network of doctors and pediatric specialists</p>
                Electronic submission of prescriptions to your pharmacy
            </div>


            </div>
        </div>
      </>
    );
}

export default urgentCare;