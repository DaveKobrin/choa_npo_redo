import { FootLowerNav, FooterContainer, FooterContainerWrapper, LeftDiv, UpperListItem, LogoWrapper, RightDiv, UpperUList, NoticesDiv, NoticesUL, NoticesLI, BoilerPlateDiv, SocialDiv, SocialUL, VertLine, SocialLI } from "@/styles/footerstyles";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <FooterContainerWrapper>
            <FooterContainer>
                <LogoWrapper>
                    <Image src="/choa-logo-color-white.webp" width="300" height="150"/>
                </LogoWrapper>
                
                <LeftDiv>
                    <LeftDiv>
                        <UpperUList>
                            <Link href="#"><UpperListItem>About Us</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Contact Us</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Search Jobs</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Corporate Compliance</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Latest News</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Statement of Nondiscrimination</UpperListItem></Link>
                        </UpperUList>
                    </LeftDiv>
                    <RightDiv>
                        <Image src="/usnews_top_ranking.png" width="145" height="203" />
                    </RightDiv>
                </LeftDiv>
                <RightDiv>
                    <LeftDiv>
                        <UpperUList>
                            <Link href="#"><UpperListItem>Medical Services</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Patients</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Visiting Our Hospitals</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Healthcare Professionals</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Research</UpperListItem></Link>
                        </UpperUList>
                    </LeftDiv>
                    <RightDiv>
                        <UpperUList>
                            <Link href="#"><UpperListItem>Find a Doctor</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Find a Location</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Children&apos;s Physician Group</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Sign in to MyChart</UpperListItem></Link>
                            <Link href="#"><UpperListItem>Children&apos;s Doctor Directory</UpperListItem></Link>
                        </UpperUList>
                    </RightDiv>
                </RightDiv>
                
                <FootLowerNav>
                    <NoticesDiv>
                        <NoticesUL>
                        <Link href="#"><NoticesLI>Terms os Use</NoticesLI></Link>
                        <Link href="#"><NoticesLI>Patient Privacy</NoticesLI></Link>
                        <Link href="#"><NoticesLI>Notice of Nuance Communications Security Incident</NoticesLI></Link>
                        </NoticesUL>
                    </NoticesDiv>
                    <BoilerPlateDiv>
                        <p>©2023 Children&apos;s Healthcare of Atlanta Inc. All Rights Reserved. Children&apos;s Healthcare of Atlanta is a not-for-profit, section 501(c)(3). EIN 58-2367819</p>
                    </BoilerPlateDiv>
                    <SocialDiv>
                        <SocialUL>
                        <Link href="#"><SocialLI><Image src="/fb.png" width="32" height="32" /></SocialLI></Link>
                        <Link href="#"><SocialLI><Image src="/twitter.png" width="32" height="32" /></SocialLI></Link>
                        <Link href="#"><SocialLI><Image src="/instagram.png" width="32" height="32" /></SocialLI></Link>
                        <Link href="#"><SocialLI><Image src="/linkedin.png" width="32" height="32" /></SocialLI></Link>
                        <Link href="#"><SocialLI><Image src="/youtube.png" width="32" height="32" /></SocialLI></Link>
                        </SocialUL>
                        <VertLine />
                        <SocialUL>
                        <Link href="#"><SocialLI><Image src="/email.png" width="32" height="32" /></SocialLI></Link>
                        <Link href="#"><SocialLI><Image src="/phone.png" width="32" height="32" /></SocialLI></Link>
                        </SocialUL>
                    </SocialDiv>
                </FootLowerNav>
            </FooterContainer>
        </FooterContainerWrapper>
    )
}