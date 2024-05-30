import CabinShowFormButton from "@/components/CabinsComponents/CabinShowFormButton";
import CabinsContent from "@/components/CabinsComponents/CabinsContent";
import Menus from "@/components/Menus";

function Page() {
  return (
    <>
      <div className="min-w-[310px] max-w-[900px] flex items-center justify-between">
        <h1 className="font-bold text-gray-600 text-sm sm:text-base md:text-lg lg:text-2xl">
          All cabins
        </h1>
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl">
          Filter / Sort
        </p>
        <CabinShowFormButton />
      </div>

      <Menus>
        <div
          /*Cabins Table*/
          role="table"
          className="min-w-[310px] max-w-[900px] border-2 border-solid border-gray-200 bg-white rounded-lg overflow-hidden"
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
      </Menus>
    </>
  );
}

export default Page;
