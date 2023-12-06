import Map from '../components/Maps'
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes'
import Button from '../components/Button'
import { PageColors } from '@/styles/globalstyles';

const mapLocations = () => {
    return (
        <>
            <h1 className="flex justify-center mt-10 mb-20 text-4xl">Locations</h1>
            <div className="flex justify-center w-screen">
                <Map/>
            </div>
            <div className="flex justify-center">
                <Button text={"MYChart Log In"} bgColor={PageColors.BUTTON_GREEN} textColor={PageColors.TEXT_WHITE} />
                <Button text={"Donate"} bgColor={PageColors.BUTTON_YELLOW} textColor={PageColors.TEXT_BLACK}/>
            </div>
        </>
    )
}

export default mapLocations;