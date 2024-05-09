import CabinTable from "@/components/CabinTable";

function page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-600 text-2xl">All cabins</h1>
        <p>Filter / Sort</p>
      </div>

      <div
        role="table"
        className="border-2 border-solid border-gray-200 md:text-base lg:text-lg bg-white rounded-lg overflow-hidden"
      >
        <header
          role="row"
          className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] items-center bg-gray-50 border-2 border-solid border-gray-100 uppercase tracking-wide sm:text-xs md:text-sm lg:text-base font-semibold text-gray-600 md:py-3 md:px-6 lg:py-[1.6rem] lg:px-[2.4rem]"
        >
          <div></div>
          <div>Cabin</div>
          <div className="sm:mr-6">Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </header>

        <CabinTable />
      </div>
    </>
  );
}

export default page;
