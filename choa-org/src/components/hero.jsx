import { HeroBox, HeroContainer, HeroHead, HeroText } from "@/styles/heroStyle";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { PageColors } from "@/styles/globalstyles";


// img - backgroud for hero section
// alt - image alt label
// head - headding for info card
// text - text for info card
// buText - the text on the button if present
// target - if there is a button where to link


export const Hero = (props) => {
    const { img, alt, head, text, buText, target } = props;

    const targ = target || "#";

    let hasButton = false;
    if (buText)
        hasButton = true;


    return (
        <>
            <HeroContainer>
                <Image src={img} alt={alt || ""} layout="fill" objectFit="cover"/>
                <HeroBox>
                    <HeroHead>{head}</HeroHead>
                    <HeroText>{text}</HeroText>
                    {hasButton && 
                        <Link href={targ}>
                            <Button 
                                text={buText}
                                bgColor={PageColors.BUTTON_GREEN}
                                textColor={PageColors.TEXT_WHITE}
                                borderRadius={"1.5rem"}
                                fontSize={"1.25rem"}
                                padding={"1rem 2rem"}
                                handleClick={""}
                            />
                        </Link>}
                </HeroBox> 
            </HeroContainer>
        </>
    )

}



