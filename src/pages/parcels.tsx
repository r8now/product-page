import Parcels from "@/components/Parcels";
import { Inter } from "next/font/google";

const parcels = () => {
  return (
    <main className="flex flex-col mt-12 gap-y-4">
      <Parcels  />
      <Parcels />
      <Parcels />
    </main>
  );
};

export default parcels;
