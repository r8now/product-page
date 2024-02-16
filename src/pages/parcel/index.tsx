import getAllParcelData from "@/utils/parcel-fetch";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Parcel } from "@/utils/parcel-fetch";
import Link from "next/link";
import Parcels from "@/components/Parcels";

export const getStaticProps: GetStaticProps = async () => {
  const parcelData: Array<Parcel> = await getAllParcelData();

  return {
    props: { parcelData },
    revalidate: 3600,
  };
};

export default function ParcelPage({
  parcelData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="flex flex-wrap justify-center w-3/4 mx-auto mt-12  gap-4">
      {parcelData.map((parcel: JSX.IntrinsicAttributes & Parcel) => (
        <Link key={parcel.id} href={`/parcel/${parcel.id} `}>
          <Parcels {...parcel} />
        </Link>
      ))}
    </main>
  );
}
