import { WaitCard } from "@/components/waitCard";
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";
import {Heading1Title, ParagList} from '@/styles/textStyles'
import { SearchInput, SearchIcon } from '@/styles/navStyles';
import {EmergencySearch, EmergencyInput} from '@/styles/waitPageStyles'
import { PageColors } from "@/styles/globalstyles";
import { ParagText, Heading3Title, Heading4Title } from "@/styles/textStyles";
import GetDistance from "@/components/GetDistance";
import { useState } from 'react'
import Map from "@/components/Maps";
import Button from "@/components/Button";

// EXAMPLE:
// locationAndWaitTimes.map((location, idx) => {
//     return (
//     <>
//         <WaitCard location={location} key={idx} />
//     </>
// )})

// TODO: 
// - Make two scrollable (fill overflow) divs, one filtered for emergency departments and one for urgent care centers
// - be able to sort by 1. distance from user and 2. ??? wait times I think?

const WaitTimes = () => {
    const [distances, setDistances] = useState([]);


    // FIXME: Put all of this sort functionality into a reusable component
    const [sortBy1, setSortBy1] = useState('Distance'); // Initial sorting option
    const [sortBy2, setSortBy2] = useState('Distance'); // Initial sorting option

    const handleSortChange1 = (event) => {
      setSortBy1(event.target.value);
    };

    const handleSortChange2 = (event) => {
        setSortBy2(event.target.value);
      };
  
    const handleClick = () => {
        console.log("click click")
    }
    const renderWaitCards1 = () => {
        const distances = GetDistance(); 
    
        return locationAndWaitTimes
          .filter((location) => location.facilityType === "Emergency Department")
          .sort((a, b) => {
            console.log("a, b: ", JSON.stringify(a) + ", " + JSON.stringify(b))
            if (sortBy1 === 'Distance') {

             const distanceAObject = distances.find(d => d.locationName === a.name);
            const distanceBObject = distances.find(d => d.locationName === b.name);

            const distanceA = distanceAObject ? distanceAObject.distance : null;
            const distanceB = distanceBObject ? distanceBObject.distance : null;
              console.log("distance A: " + JSON.stringify(distanceA))
              console.log("distance B: " + JSON.stringify(distanceB))
    
              // Compare distances
              return distanceA - distanceB;
            } else if (sortBy1 === 'WaitTimes') {
              return a.waitTime - b.waitTime;
            } else {
              return 0;
            }
          })
          .map((location, idx) => {
            const distance = distances.find(d => d.locationName === location.name)?.distance;
            return(
                <>
                    <h1>{location.name}</h1>
                    <h1>{distance} miles away</h1>
                    <WaitCard location={location} key={idx} />
                </>
            )   
    });
      };

      const renderWaitCards2 = () => {
        const distances = GetDistance(); 
    
        return locationAndWaitTimes
          .filter((location) => location.facilityType === "Urgent Care Center")
          .sort((a, b) => {
            console.log("a, b: ", JSON.stringify(a) + ", " + JSON.stringify(b))
            if (sortBy2 === 'Distance') {

             const distanceAObject = distances.find(d => d.locationName === a.name);
            const distanceBObject = distances.find(d => d.locationName === b.name);

            const distanceA = distanceAObject ? distanceAObject.distance : null;
            const distanceB = distanceBObject ? distanceBObject.distance : null;
              console.log("distance A: " + JSON.stringify(distanceA))
              console.log("distance B: " + JSON.stringify(distanceB))
    
              // Compare distances
              return distanceA - distanceB;
            } else if (sortBy2 === 'WaitTimes') {
              return a.waitTime - b.waitTime;
            } else {
              return 0;
            }
          })
          .map((location, idx) => {
            const distance = distances.find(d => d.locationName === location.name)?.distance;
            return(
                <>
                    <h1>{location.name}</h1>
                    <h1>{distance} miles away</h1>
                    <WaitCard location={location} key={idx} />
                </>
            )   
    });
      };
    
      const waitCards1 = renderWaitCards1();

      const waitCards2 = renderWaitCards2();

    return (
        <>
            <div className="flex flex-col min-w-screen min-h-screen">
                    <div className="flex w-[82vw] mt-14 mb-2 mx-auto justify-between items-center">
                        <Heading1Title>Wait Times</Heading1Title>
                        <div>
                        <EmergencySearch>
                            <EmergencyInput placeholder="Search Emergency Department" />
                            <SearchIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </SearchIcon>
                        </EmergencySearch>
                        </div>
                    </div>
                    <div className="flex justify-center w-screen">
                        {/* <Map/> */}
                    </div>
                    
                    {/* Wait Times Section */}
                    <div className="flex flex-col items-center my-5">
                        <div>
                            <div className="flex flex-row w-full justify-between px-4 py-5 items-center">
                                <h4>Emergency Department Wait Times</h4>
                                <select id="sortBy1" value={sortBy1} onChange={handleSortChange1} className="text-black border border-gray-300 p-2">
                                    <option value="" disabled selected>Filter By</option>
                                    <option value="Distance">Distance: Closest to Farthest</option>
                                    <option value="WaitTimes">Wait Times: Low to High</option>
                                </select>
                            </div>
                        {/* Emergency Department Wait Times Section */}
                            <div className="border border-black w-[70vw] overflow-y-scroll h-[264px]">
                                {waitCards1}
                            </div>
                        </div>
                        {/* Urgent Care Wait Times Section */}
                        <div>
                            <div className="flex flex-row w-full justify-between px-4 py-5 items-center mt-7">
                                <h4>Urgent Care Wait Times</h4>
                                <select id="sortBy2" value={sortBy2} onChange={handleSortChange2} className="text-black border border-gray-300 p-2">
                                    <option value="" disabled selected>Filter By</option>
                                    <option value="Distance">Distance: Closest to Farthest</option>
                                    <option value="WaitTimes">Wait Times: Low to High</option>
                                </select>
                            </div>
                            <div className="border border-black w-[70vw] overflow-y-scroll h-[264px]">
                                {waitCards2}
                            </div>
                        </div>
                    </div>
                    
                    {/* Announcement */}
                    <div className="flex flex-row items-center w-full justify-center my-20">
                        <img src="/announcement-icon.png" alt="megaphone icon" />
                        <div className="w-[38vw] mx-14">
                            <ParagText>We are seeing an increase in very sick kids and teens during this cold and flu season, which has led to longer wait times in our Emergency Departments and Urgent Care Centers. Thank you for your patience.</ParagText>
                        </div>
                    </div>

                    {/* About our Urgent Care Centers */}
                    <div className="flex flex-col self-center justify-center w-[70vw]">
                        <div>
                            <Heading3Title>About Our Urgent Care Centers</Heading3Title>
                            <ParagText>At our pediatric Urgent Care Centers, no appointment is necessary, and walk-ins are welcome. Urgent Care wait times are updated every minute and are estimates based on the average time it takes for a patient to be placed in an exam room.</ParagText>
                            <ParagText>We’re open seven days a week, including evenings and holidays.</ParagText>
                            <div className="pl-10">
                                <ParagList>Monday-Friday: 11 a.m. to 9 p.m.</ParagList>
                                <ParagList>Saturday and Sunday: 9 a.m. to 7 p.m.</ParagList>
                                <ParagList>Holidays: 9 a.m. to 7 p.m.</ParagList>
                            </div>
                            <ParagText>Holidays include New Year’s Day, Martin Luther King Jr. Day, Memorial Day, Fourth of July, Labor Day, Thanksgiving and Christmas Day.</ParagText>
                            <ParagText>We offer holiday hours at the following Urgent Care Centers:</ParagText>
                            <div className="pl-10">
                                <ParagList>Children’s at Chamblee-Brookhaven</ParagList>
                                <ParagList>Children’s at Forsyth</ParagList>
                                <ParagList>Children’s at Hudson Bridge</ParagList>
                                <ParagList>Children’s at Satellite Boulevard</ParagList>
                                <ParagList>Children’s at Town Center</ParagList>
                            </div>

                            <ParagText>The best time to bring your child to one of our Urgent Care Centers is during the middle of the day. We are busiest in the mornings, late afternoons and evenings. When determining which center to take your child, consider both drive time and wait time. It may be better to go to a location farther away with a shorter wait time.</ParagText>
                            <ParagList>Hours may be affected by unanticipated circumstances. Check back for real-time updates.</ParagList>
                            <ParagList>If the wait time is listed as “unavailable,” the center is open, and we can accept walk-in patients. Wait times begin 30 minutes after we open and stop 15 minutes before we close.</ParagList>
                        </div>
                    </div>


                    {/* Ways We're Keeping You Safe */}
                    <div className="flex justify-center items-center w-full my-14">
                        <div className="mx-5">
                            <img src="/girl_in_facemask.png" alt="girl in face mask" />
                        </div>
                        <div className="w-[40vw] mx-5">
                            <h5 className="text-[1.25rem] text-[#CA005D]">Ways We're Keeping You Safe</h5>
                            <Heading4Title>Rest assured we’re here for you if you need us.</Heading4Title>
                            <ParagText>At Children’s, safety is our top priority. We are working hard to protect our patients, families and staff. Whether you have an appointment or need to visit us for emergency care, we’ve put extra precautions in place to keep your family safe.</ParagText>
                            <Button  
                                text={"SEE HOW"}
                                bgColor={PageColors.BUTTON_GREEN}
                                textColor={PageColors.TEXT_WHITE}
                                borderRadius={"2.27613rem"}
                                fontSize={"0.85356rem"}
                                padding={"1rem 2rem"}
                                handleClick={handleClick}
                            />
                        </div>
                    </div>

                    {/* Article Preview Section */}
                    <div className="flex flex-row w-full items-center justify-center my-10">
                        <div>
                            <img src="/article_img_doctor_and_child.png" alt="doctor and child - difference between care centers" />
                            <h6 className={`text-[${PageColors.NAVBAR_GREEN}] font-bold w-[300px]`}>Pediatrician, Urgent Care or Emergency Care?</h6>
                        </div>
                        <div>
                            <img src="/article_img_girl-blowing-nose.png" alt="girl with flu blowing nose" />
                            <h6 className={`text-[${PageColors.NAVBAR_GREEN}] font-bold w-[300px]`}>Flu, COVID-19, Cold—What’s the Difference?</h6>
                        </div>
                        <div>
                            <img src="/article_img_boy-with-fever.png" alt="boy with fever"/>
                            <h6 className={`text-[${PageColors.NAVBAR_GREEN}] font-bold w-[300px]`}>Fever 101: What You Need to Know</h6>
                        </div>

                    </div>
            </div>
        
        </>
    )
}

export default WaitTimes;