import CabinShowFormButton from "@/components/CabinsComponents/CabinShowFormButton";
import CabinTableOperations from "@/components/CabinsComponents/CabinTableOperations";
import CabinsContent from "@/components/CabinsComponents/CabinsContent";
import Menus from "@/components/Menus";

function Page() {
  return (
    <>
      <div className="min-w-[310px] max-w-[900px] flex flex-col gap-3">
        <h1 className="font-bold justify-start text-gray-600 text-lg sm:text-xl md:text-2xl">
          All cabins
        </h1>

        <div className="flex items-center gap-3 justify-between">
          <CabinTableOperations />

          <CabinShowFormButton />
        </div>
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
