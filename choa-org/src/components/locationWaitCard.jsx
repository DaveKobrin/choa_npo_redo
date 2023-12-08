
import { CardDiv, LocSubDiv, TimeP, TimeSpan, LocNameP, CardText, GreenSpan, SvgWrapper, TimeSubDiv, HoursSubDiv } from "@/styles/locationWaitCardStyles";

import Link from "next/link";
import { SvgImg } from "./svgImage";


export const LocationWaitCard = (props) => {
    const { location } = props;

    return (
        <CardDiv>
            {/* <SubDiv> */}
                <TimeSubDiv>
                    <TimeSpan>{location.waitTime}</TimeSpan>
                    <TimeP>
                        Minute Wait
                    </TimeP>
                </TimeSubDiv>
            {/* </SubDiv> */}
            <LocSubDiv>
                <LocNameP>{location.name}</LocNameP>
                <CardText>{location.address}</CardText>
                <CardText>{location.city}, {location.state} {location.zipcode}</CardText>
                <Link href="#"><CardText><GreenSpan>Get Directions</GreenSpan></CardText></Link>
            </LocSubDiv>
            <HoursSubDiv>
                <LocNameP>Hours of Operation</LocNameP>
                <CardText>{location.hours}</CardText>
            </HoursSubDiv>
        </CardDiv>
    )
}

