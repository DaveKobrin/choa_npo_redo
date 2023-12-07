import { FooterContainer, FooterContainerWrapper, LogoWrapper } from "@/styles/footerstyles";
import Image from "next/image";

export default function Footer() {
    return (
        <FooterContainerWrapper>
            <FooterContainer>
                <LogoWrapper>
                    <Image src="/choa-logo-color-white.webp" width="300" height="150"/>
                </LogoWrapper>
                <h1>this is my footer</h1>
            </FooterContainer>
        </FooterContainerWrapper>
    )
}