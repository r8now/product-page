

const Parcels = () => {
  return (
    <div className="flex flex-col w-1/4 gap-4 py-4 min-w-[350px]  bg-slate-800 items-center mx-auto relative">
      {/* Simulated border as an inner div */}
      <div className="absolute rounded-lg  left-[2px] top-2 bottom-2 w-[6px] ml-1 bg-slate-400"></div>

      <div className="flex text-slate-200  flex-col w-full pl-6 gap-2">
        {/* Adjusted padding here for content */}
        <h2 className="text-left text-2xl w-full">Meds</h2>
        <p className="text-left w-full">Leverans onsdag</p>
        <p className="text-left pl-2 pr-2 py-1 rounded-md  mr-auto  bg-slate-700">
          Paket ännu ej mottaget
        </p>
        <p className="text-left text-sm  flex w-full">
          <span className="my-auto pr-2">
            <img src="/instabox.png" alt="instabox-logga" className="w-4" />
          </span>
          Kristianstad coop Näsby
        </p>
      </div>
    </div>
  );
}

export default Parcels