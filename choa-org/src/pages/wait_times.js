import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";

const WaitTimes = () => {
    return (
        locationAndWaitTimes.map((location, idx) => {
            return (
            <>
                <p>{location.name}</p>
                <p>{location.address}</p>
                <p>{location.city}</p>
                <p>{location.state}</p>
                <p>{location.zipcode}</p>
            </>
        )})
    )
}

export default WaitTimes;