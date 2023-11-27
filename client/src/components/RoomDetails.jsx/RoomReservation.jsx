import { formatDistance } from "date-fns/esm";
import React, { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation =  ({ room }) => {

  // price calculation
  // Total Days * Price
//   const totalDays = parseFloat(
//     formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
//   );
//     const totalPrice = totalDays * room?.price;
    
//     const [value, setValue] = useState({
//         startDate: new Date(room?.from),
//         endData: new Date(room?.to),
//         key: 'selection',

//     })

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden  bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender ></Calender>
      </div>
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex justify-between items-center font-semibold text-lg">
        <div className="">Total</div>
        {/* <div className="">${totalPrice}</div> */}
      </div>
    </div>
  );
};

export default RoomReservation;
