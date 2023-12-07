import { WaitCard } from "@/components/waitCard";
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";

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
            <div className="min-w-screen h-screen">
                    
                    {/* Wait Times Section */}
                    <div className="flex flex-col items-center my-32">
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
                            <div className="border border-black w-[1204px] overflow-y-scroll h-[264px]">
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
                        <div className="flex flex-row w-full justify-between px-4 py-5 items-center">
                                <h4>Urgent Care Wait Times</h4>
                                <select className="text-black border border-gray-300 p-2">
                                    <option value="" disabled selected>Filter By</option>
                                    <option value="Distance">Distance: Closest to Farthest</option>
                                    <option value="Wait Times">Wait Times: Low to High</option>
                                </select>
                            </div>
                            <div className="border border-black w-[1204px] overflow-y-scroll h-[264px]">
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