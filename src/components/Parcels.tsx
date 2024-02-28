import React from "react";
import Image from "next/image";
import type {Parcel} from "@/utils/parcel-fetch"


const Parcels = (
  { sender, eta, status, location_name }: Parcel
  
) => {
  return (
    <div className="flex flex-col w-1/4 gap-4 py-4 min-w-[350px]  bg-slate-800 items-center mx-auto relative">
      {/* Simulated border as an inner div */}
      <div className="absolute rounded-lg  left-[2px] top-2 bottom-2 w-[6px] ml-1 bg-slate-400"></div>

      <div className={`flex text-slate-200 flex-col w-full pl-6 gap-2`}>
        <h2 className="text-left text-2xl  w-full">
          {sender} 
        </h2>
        <p className="text-left w-full">{eta.slice(0, 10)}</p>
        <p className="text-left pl-2 pr-2 py-1 rounded-md  mr-auto  bg-slate-700">
          {status}
        </p>
        <p className="text-left text-sm  flex w-full">
          <span className="my-auto pr-2">
            <Image
              src="/instabox.png"
              alt="instabox-logga"
              className="w-4"
              width={16}
              height={16}
            />
          </span>
          {location_name}
        </p>
      </div>
    </div>
  );
};

export default Parcels;
