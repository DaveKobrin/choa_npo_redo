import { WaitCard } from "@/components/waitCard";
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";
import {Heading1Title} from '@/styles/textStyles'
import { SearchInput, SearchIcon } from '@/styles/navStyles';
import {EmergencySearch} from '@/styles/waitPageStyles'

import Map from "@/components/Maps";

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
    return (
        <>
            <div className="flex flex-col min-w-screen min-h-screen">
                    <div className="flex w-[82vw]  mx-auto justify-between items-center">
                        <Heading1Title>Wait Times</Heading1Title>
                        <div>
                        <EmergencySearch>
                            <SearchInput placeholder="Search Emergency Department" />
                            <SearchIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </SearchIcon>
                        </EmergencySearch>
                        </div>
                    </div>
                    <div className="flex justify-center w-screen">
                        <Map/>
                    </div>
                    
                    {/* Wait Times Section */}
                    <div className="flex flex-col items-center my-5">
                        <div>
                            <div className="flex flex-row w-full justify-between px-4 py-5 items-center">
                                <h4>Emergency Department Wait Times</h4>
                                <select className="text-black border border-gray-300 p-2">
                                    <option value="" disabled selected>Filter By</option>
                                    <option value="Distance">Distance: Closest to Farthest</option>
                                    <option value="Wait Times">Wait Times: Low to High</option>
                                </select>
                            </div>
                        {/* Emergency Department Wait Times Section */}
                            <div className="border border-black w-[70vw] overflow-y-scroll h-[264px]">
                                {locationAndWaitTimes
                                    .filter((location) =>{
                                        return location.facilityType === "Emergency Department"
                                    })
                                    .map((location, idx) => {
                                    return (
                                    <>
                                        <WaitCard location={location} key={idx} />
                                    </>
                                )})}
                            </div>
                        </div>
                        {/* Urgent Care Wait Times Section */}
                        <div>
                        <div className="flex flex-row w-full justify-between px-4 py-5 items-center mt-7">
                                <h4>Urgent Care Wait Times</h4>
                                <select className="text-black border border-gray-300 p-2">
                                    <option value="" disabled selected>Filter By</option>
                                    <option value="Distance">Distance: Closest to Farthest</option>
                                    <option value="Wait Times">Wait Times: Low to High</option>
                                </select>
                            </div>
                            <div className="border border-black w-[70vw] overflow-y-scroll h-[264px]">
                                {locationAndWaitTimes
                                        .filter((location) =>{
                                            return location.facilityType === "Urgent Care Center"
                                        })
                                        .map((location, idx) => {
                                        return (
                                        <>
                                            <WaitCard location={location} key={idx} />
                                        </>
                                    )})}
                            </div>
                        </div>
                    </div>
            </div>
        
        </>
    )
}

export default WaitTimes;