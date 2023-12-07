
import { CardDiv, SubDiv, TimeP, TimeSpan, LocNameP, CardText, GreenSpan, SvgWrapper, LocSubDiv } from "@/styles/waitCardStyles";

import Link from "next/link";
import { SvgImg } from "./svgImage";


export const WaitCard = (props) => {
    const { location } = props;

    return (
        <CardDiv>
            <SubDiv>
                <LocSubDiv>
                    <TimeSpan>{location.waitTime}</TimeSpan>
                    <TimeP>
                        Minute Wait
                    </TimeP>
                </LocSubDiv>
            </SubDiv>
            <SubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <SvgImg iconName="mapPin" />
                    </SvgWrapper>
                    <LocNameP>{location.name}</LocNameP>
                </LocSubDiv>
                <CardText>{location.address}</CardText>
                <CardText>{location.city}, {location.state} {location.zipcode}</CardText>
                <Link href="#"><CardText><GreenSpan>Get Directions</GreenSpan></CardText></Link>
            </SubDiv>
            <SubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <SvgImg iconName="ambulance" />
                    </SvgWrapper>
                    <CardText>{location.facilityType}</CardText>
                </LocSubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <SvgImg iconName="clock" />
                    </SvgWrapper>
                    <CardText>{location.hours}</CardText>
                </LocSubDiv>

            </SubDiv>
        </CardDiv>
    )
}

