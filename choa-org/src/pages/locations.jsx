import Map from '../components/Maps'
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes'

const mapLocations = () => {
    return (
        <>
            <div className="flex flex-col min-w-screen min-h-screen">
                <h1 className="flex justify-center mt-10 mb-20 text-4xl">Locations</h1>
                <div className="flex justify-center w-screen">
                    <Map/>
                </div>
            </div>
        </>
    )
}

export default mapLocations;