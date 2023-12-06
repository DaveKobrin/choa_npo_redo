import { useEffect, useState } from "react";
import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";

// TODO: Props need to be:
// - handleClick?
// - where to navigate
// - text
// - 

const Button = ({}) => {
  
    return (
        <>
            <button className={`bg-green-500 py-5 px-10 rounded`} style={{ fontFamily: 'Arial'}}>
                Button
            </button>
        </>
    )
};

export default Button;
