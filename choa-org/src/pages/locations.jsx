import Map from '../components/Maps'
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes'
import Button from '../components/Button'

const mapLocations = () => {
    return (
        <>
            <h1 className="flex justify-center mt-10 mb-20 text-4xl">Locations</h1>
            <div className="flex justify-center w-screen">
                <Map/>
            </div>
            <div className="flex justify-center">
                <Button text={"DONATE"} />
            </div>
        </>
    )
}

export default mapLocations;