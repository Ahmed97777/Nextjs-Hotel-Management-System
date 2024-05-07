import CabinTable from "@/components/CabinTable";

function page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">All cabins</h1>
        <p>Filter / Sort</p>
      </div>

      <CabinTable />
    </>
  );
}

export default page;
