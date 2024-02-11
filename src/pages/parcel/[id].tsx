import { useRouter } from "next/router";
import { parcelsData } from "@/components/Parcels"; 
import Image from "next/image";

const Details = () => {
  const router = useRouter();
  const { id }  = router.query; // Get the dynamic part of the URL

  // Find the parcel data matching the ID
  const parcel = parcelsData.find((parcel) => parcel.id === parseInt(id));

  if (!parcel) {
    return <div >Parcel not found</div>;
  }
 




  return (
    <div className="flex flex-col w-1/4 gap-4 py-4 min-w-[350px]  bg-slate-800 items-center mx-auto relative">
      
      <div className="absolute rounded-lg  left-[2px] top-2 bottom-2 w-[6px] ml-1 bg-slate-400"></div>

      <div className="flex text-slate-200  flex-col w-full pl-6 gap-2">
        {/* Adjusted padding here for content */}
        <h2 className="text-left text-2xl w-full">{parcel.sender}</h2>
        <p className="text-left w-full">{parcel.eta.slice(0, 10)}</p>
        <p className="text-left pl-2 pr-2 py-1 rounded-md  mr-auto  bg-slate-700">
          {parcel.status}
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
          {parcel.location_name}
        </p>
      </div>
    </div>
  );
};

export default Details;
