import Parcels, { parcelsData } from "@/components/Parcels";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



const parcel = () => {
  return (
    <main className="flex flex-col mt-12 gap-y-4">
      {parcelsData.map((parcel) => {
        return (
          <>
            <Link href={`/parcel/${parcel.id}`}>
              <Parcels key={parcel.id} {...parcel} />
            </Link>
          </>
        );
      })}
    </main>
  );
};

export default function Home() {
  return parcel()
}
