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

                    {/* Emergency Department Wait Times Section */}
                    <h1>Wait times</h1>

                    <div>

                    </div>

                    {/* Urgent Care Wait Times Section */}
                    <div>
                        
                    </div>
                    
            </div>
        
        </>
    )
}

export default WaitTimes;