import { CardDiv, SubDiv, TimeP, TimeSpan, LocNameP, CardText, GreenSpan, SvgWrapper, LocSubDiv } from "@/styles/waitCardStyles";

import Link from "next/link";


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
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 2.32898C8.706 2.32898 10.5 4.1071 10.5 6.29358C10.5 8.7784 8.062 12.5319 6.499 14.6014C4.936 12.5339 2.5 8.78137 2.5 6.29358C2.5 4.1071 4.294 2.32898 6.5 2.32898ZM6.5 17.7533C8.903 14.8958 12.5 9.99751 12.5 6.29358C12.5 3.01387 9.809 0.34668 6.5 0.34668C3.191 0.34668 0.5 3.01387 0.5 6.29358C0.5 9.9985 4.099 14.8968 6.5 17.7533Z" fill="#767676" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 6.29358C8.5 5.20133 7.603 4.31128 6.5 4.31128C5.397 4.31128 4.5 5.20133 4.5 6.29358C4.5 7.38583 5.397 8.27588 6.5 8.27588C7.603 8.27588 8.5 7.38583 8.5 6.29358Z" fill="#767676" />
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                            <g clipPath="url(#clip0_199_1252)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.5 19.7037C17.8388 19.7037 17.3 19.1661 17.3 18.5037C17.3 17.8413 17.8388 17.3037 18.5 17.3037C19.1612 17.3037 19.7 17.8413 19.7 18.5037C19.7 19.1661 19.1612 19.7037 18.5 19.7037ZM7.7 19.7037C7.0388 19.7037 6.5 19.1661 6.5 18.5037C6.5 17.8413 7.0388 17.3037 7.7 17.3037C8.3612 17.3037 8.9 17.8413 8.9 18.5037C8.9 19.1661 8.3612 19.7037 7.7 19.7037ZM2.9 11.8017L5.7968 8.90366H7.7V14.9037C6.1376 14.9037 4.8188 15.9093 4.322 17.3037H2.9V11.8017ZM22.1 5.30366V17.3037H21.8792C21.3812 15.9093 20.0624 14.9037 18.5 14.9037C16.9376 14.9037 15.6188 15.9093 15.122 17.3037H11.0792C10.8764 16.7349 10.5392 16.2357 10.1 15.8397V5.30366H22.1ZM22.1 2.90366H14.9C14.9 1.57886 13.826 0.503662 12.5 0.503662C11.1752 0.503662 10.1 1.57886 10.1 2.90366C8.7764 2.90366 7.7 3.98126 7.7 5.30366V6.50366H5.3C4.982 6.50366 4.676 6.62966 4.4516 6.85526L0.8516 10.4553C0.626 10.6797 0.5 10.9857 0.5 11.3037V18.5037C0.5 19.1661 1.0376 19.7037 1.7 19.7037H4.322C4.8188 21.0981 6.1376 22.1037 7.7 22.1037C9.2624 22.1037 10.5812 21.0981 11.0792 19.7037H15.122C15.6188 21.0981 16.9376 22.1037 18.5 22.1037C20.0624 22.1037 21.3812 21.0981 21.8792 19.7037H23.3C23.9624 19.7037 24.5 19.1661 24.5 18.5037V5.30366C24.5 3.98126 23.4236 2.90366 22.1 2.90366Z" fill="#0081C6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9 13.7037H17.3V11.3037H19.7V8.90366H17.3V6.50366H14.9V8.90366H12.5V11.3037H14.9V13.7037Z" fill="#0081C6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.49961 11.303H4.09961V13.703H6.49961V11.303Z" fill="#0081C6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_199_1252">
                                    <rect width="24" height="22.1538" fill="white" transform="translate(0.5 0.503052)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </SvgWrapper>
                    <CardText>{location.facilityType}</CardText>
                </LocSubDiv>
                <LocSubDiv>
                    <SvgWrapper>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_199_1261)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 20.6444C7.06778 20.6444 3.05556 16.6322 3.05556 11.7C3.05556 6.76901 7.06778 2.75551 12 2.75551C16.9322 2.75551 20.9444 6.76901 20.9444 11.7C20.9444 16.6322 16.9322 20.6444 12 20.6444ZM12 0.199951C5.65967 0.199951 0.5 5.35962 0.5 11.7C0.5 18.0416 5.65967 23.2 12 23.2C18.3403 23.2 23.5 18.0416 23.5 11.7C23.5 5.35962 18.3403 0.199951 12 0.199951Z" fill="#0081C6" />
                                <path d="M11.2867 9.59612C11.8538 8.94282 12.8447 8.90921 13.4555 9.49463L13.5536 9.59793L16.437 12.93C16.9791 13.5564 16.9107 14.5037 16.2843 15.0458C15.6947 15.556 14.8209 15.5254 14.2682 14.9978L14.1685 14.8931L12.4167 12.8694L9.05807 16.7393C8.54692 17.3281 7.67764 17.4219 7.0556 16.9782L6.94201 16.8886C6.35324 16.3775 6.25938 15.5082 6.70315 14.8862L6.79267 14.7726L11.2867 9.59612Z" fill="#0081C6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_199_1261">
                                    <rect width="23" height="23" fill="white" transform="translate(0.5 0.199951)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </SvgWrapper>
                    <CardText>{location.hours}</CardText>
                </LocSubDiv>

            </SubDiv>
        </CardDiv>
    )
}

