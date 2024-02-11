import React from "react";
import Image from "next/image";

interface ParcelsData {
  id: number;
  status: string;
  eta: string;
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  user_phone: string;
  user_name: string;
  notes: string | null;
  last_updated: string;
}

export const parcelsData: ParcelsData[] = [
  {
    id: 1,
    status: "order-info-received",
    eta: "2020-09-13T09:19:32Z",
    parcel_id: "8257",
    sender: "Ainyx",
    verification_required: true,
    location_id: "HR94 3597 3612 5724 1320 1",
    location_name: "Waywood",
    location_coordinate_latitude: -15.5544752,
    location_coordinate_longitude: -49.9417277,
    location_status_ok: false,
    user_phone: "s46 729478015",
    user_name: "Jhon Doe",
    notes: null,
    last_updated: "2020-09-11T09:18:52Z",
  },
  {
    id: 2,
    status: "delivered",
    eta: "2020-09-11T02:28:10Z",
    parcel_id: "3224",
    sender: "Trupe",
    verification_required: false,
    location_id: "BG35 XSUI 8653 182G BPGY 30",
    location_name: "South",
    location_coordinate_latitude: 53.4698755,
    location_coordinate_longitude: 35.0963837,
    location_status_ok: false,
    user_phone: ":46 729478015",
    user_name: "Jhon Doe",
    notes: "Detachment at Left Hand, Partial 3rd Ray, Open Approach",
    last_updated: "2020-09-25T17:59:59Z",
  },
  {
    id: 3,
    status: "delivered",
    eta: "2020-09-18T08:21:29Z",
    parcel_id: "6919",
    sender: "Chatterbridge",
    verification_required: true,
    location_id: "AD53 3798 6091 5T8Y F7BS V4OH",
    location_name: "Utah",
    location_coordinate_latitude: -6.9641448,
    location_coordinate_longitude: 108.0124469,
    location_status_ok: true,
    user_phone: "u46 729478015",
    user_name: "Jhon Doe",
    notes: null,
    last_updated: "2020-09-01T00:12:56Z",
  },
];

/*const Parcels: React.FC<ParcelsData> = ({
  sender,
  eta,
  status,
  location_name,
}) => {
  return ( */


const Parcels = ({
  sender,
  eta,
  status,
  location_name,
}: ParcelsData) => {
  return (
    <div className="flex flex-col w-1/4 gap-4 py-4 min-w-[350px]  bg-slate-800 items-center mx-auto relative">
      {/* Simulated border as an inner div */}
      <div className="absolute rounded-lg  left-[2px] top-2 bottom-2 w-[6px] ml-1 bg-slate-400"></div>

      <div className="flex text-slate-200  flex-col w-full pl-6 gap-2">
        {/* Adjusted padding here for content */}
        <h2 className="text-left text-2xl w-full">{sender}</h2>
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
