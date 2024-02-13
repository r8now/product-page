import { useRouter } from "next/router";
import Parcels, { parcelsData } from "@/components/Parcels"; 
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
    <div className="mt-8">

<Parcels {...parcel} />

    </div>
  );
};

export default Details;
