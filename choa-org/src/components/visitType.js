import  {VisitHead, Option, Options}  from "@/styles/visitTypeStyles";
import Emergency from "../../public/emergency.png"
import Urgent from "../../public/urgentcare.png"
import Primary from "../../public/primarycare.png"
import Telemed from "../../public/telemed.png"
import Image from "next/image";

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
            <Option>
                <Image src={Emergency} alt="Emergency Ambulance"/>
            </Option>
               
            <Option>
                <Image src={Urgent} alt="Urgent Care"/>
            </Option>
           
            <Option>
                <Image src={Primary} alt="Primary Care"/>
            </Option>
            

            <Option>
                <Image src={Telemed} alt="Telemed"/>
            </Option>
           
       </Options>
        {/* <div id="visitType" style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "space-evenly",
            
        }
        }> */}
            

        {/* </div> */}
      </div>
    )
}
