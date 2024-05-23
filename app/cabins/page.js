import CabinShowFormButton from "@/components/CabinsComponents/CabinShowFormButton";
import CabinsContent from "@/components/CabinsComponents/CabinsContent";

function Page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-600 text-sm sm:text-base md:text-lg lg:text-2xl">
          All cabins
        </h1>
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl">
          Filter / Sort
        </p>
        <CabinShowFormButton />
      </div>

      <div
        /*Cabins Table*/
        role="table"
        className="border-2 border-solid border-gray-200 bg-white rounded-lg overflow-hidden"
      >
        <header
          role="row"
          className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] bg-gray-50 border-2 border-solid border-gray-100 text-xs sm:text-sm md:text-base font-semibold text-gray-600"
        >
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </header>

        <CabinsContent />
      </div>
    </>
  );
}

export default Page;
