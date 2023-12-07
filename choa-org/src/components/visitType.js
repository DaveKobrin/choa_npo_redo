import  {VisitHead, Option, Options}  from "@/styles/visitTypeStyles";
import Emergency from "../../public/emergency.png"
import Urgent from "../../public/urgentcare.png"
import Primary from "../../public/primarycare.png"
import Telemed from "../../public/telemed.png"
import Image from "next/image";
import Link from "next/link";


export default function VisitType(){
    return(
        // {make this flex}
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
       <VisitHead>Visit Type</VisitHead>
       {/* {this div too}   replace this div with a styled component*/}
       <Options>
            <Link href="/emergencycare">
                <Option>
                    <Image src={Emergency} alt="Emergency Ambulance"/>
                </Option>
            </Link>

            <Link href="/urgentcare">  
                <Option>
                    <Image src={Urgent} alt="Urgent Care"/>
                </Option>
            </Link> 

            <Link href="/primarycare">
                <Option>
                    <Image src={Primary} alt="Primary Care"/>
                </Option>
            </Link>
            
            <Link href="/telemed">
                <Option>
                    <Image src={Telemed} alt="Telemed"/>
                </Option>
            </Link>
           
       </Options>
        
            

        
      </div>
    )
}
