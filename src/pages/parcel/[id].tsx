import getAllParcelData from "@/utils/parcel-fetch";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import Parcels from "@/components/Parcels";

//fix it for me with async function

async function  getInfo ()  {
  const parcelData = await getAllParcelData();
  console.log(parcelData)

  return await parcelData;
}
getInfo(); 
export const getStaticPaths: GetStaticPaths = async () => {
  const parcelData = await getAllParcelData();

  // Generate paths based on parcels
  const paths = parcelData.map((parcel) => ({
    params: { id: parcel.id.toString() },
  }));

  // Pre-render only these paths at build time.
  return { paths, fallback: "blocking" }; // Use 'blocking' for ISR and better user experience
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const parcelData = await getAllParcelData();
  const parcel = parcelData.find((p) => p.id.toString() === id);

  if (!parcel) {
    return { notFound: true };
  }

  return {
    props: { parcel },
    revalidate: 3600, // Regenerate the page at most once every hour, but does not work...
  };
};

export default function ParcelPage({
  parcel,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mt-8">
      <Parcels {...parcel} />
    </div>
  );
}
