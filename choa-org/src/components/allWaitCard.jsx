
import { CardDiv, SubDiv, TimeP, TimeSpan, LocNameP, CardText, GreenSpan, SvgWrapper, LocSubDiv, TimeSubDiv, NameSubDiv, AddSubDiv, HoursSubDiv } from "@/styles/allWaitCardStyles";

import Link from "next/link";
import { SvgImg } from "./svgImage";


export const AllWaitCard = (props) => {
    const { location } = props;

    return (
        <CardDiv>
            <TimeSubDiv>
                <LocSubDiv>
                    <TimeSpan>{location.waitTime}</TimeSpan>
                    <TimeP>
                        Minute Wait
                    </TimeP>
                </LocSubDiv>
            </TimeSubDiv>
            <NameSubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <SvgImg iconName="mapPin" />
                    </SvgWrapper>
                    <LocNameP>{location.name}</LocNameP>
                </LocSubDiv>
            </NameSubDiv>
            <AddSubDiv>
                <div className="flex justify-center items-center">
                    <div className="w-fit max-w-sm">
                        <CardText>{location.address}</CardText>
                        <CardText>{location.city}, {location.state} {location.zipcode}</CardText>
                        <Link href="#"><CardText><GreenSpan>Get Directions</GreenSpan></CardText></Link>
                    </div>
                </div>
            </AddSubDiv>
            <HoursSubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        {location.facilityType == "Emergency Department" && <SvgImg iconName="ambulance" />}
                        {location.facilityType == "Urgent Care Center" && <SvgImg iconName="medPlus" />}
                    </SvgWrapper>
                    <CardText>{location.facilityType}</CardText>
                </LocSubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <SvgImg iconName="clock" />
                    </SvgWrapper>
                    <CardText>{location.hours}</CardText>
                </LocSubDiv>
            </HoursSubDiv>
        </CardDiv>
    )
}

