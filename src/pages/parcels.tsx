import Parcels from "@/components/Parcels";
import { Inter } from "next/font/google";
import { parcelsData } from "@/components/Parcels"

const parcels = () => {
  return (
    <main className="flex flex-col mt-12 gap-y-4">
    {
      parcelsData.map((parcel)=>{
        return (
          <Parcels key={parcel.id} {...parcel} />
          
        )

      })
    }

    </main>
  );
};

export default parcels;
