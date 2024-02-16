import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col gap-8 h-[100vh] border items-center  justify-center">
      <h1 className="text-4xl text-green-300 text-center mx-8">
        Välkommen nedan hittar du länk till alla paket
      </h1>
      <h2 className="text-2xl text-blue-300 underline">
        <Link href={"/parcel"}>Sök efter paket</Link>
      </h2>
    </div>
  );
}
