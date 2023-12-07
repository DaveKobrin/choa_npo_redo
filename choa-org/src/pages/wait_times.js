import { WaitCard } from "@/components/waitCard";
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";

const WaitTimes = () => {
    return (
        locationAndWaitTimes.map((location, idx) => {
            return (
            <>
                <WaitCard location={location} key={idx} />
            </>
        )})
    )
}

export default WaitTimes;