import Loader from "./Loader";
import OptionBlock from "../features/options/OptionBlock";
import Filters from "./Filters";
import { useContext } from "react";
import OptionsContext from "../features/options/OptionsContext";

function OptionsList() {
  const { isLoading, error, filteredOptions } = useContext(OptionsContext);

  if (isLoading) return <Loader />;

  if (error) {
    console.error(error);
    throw new Error("Could not load options");
  }

  return (
    <>
      <div className="order-2 w-full md:order-1 lg:w-2/3">
        <div className="flex-col">
          <Filters count={filteredOptions?.length} />
          <div className="flex flex-col gap-2 pb-8 pt-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <OptionBlock option={option} key={option.id} />
              ))
            ) : (
              <div className="flex flex-col gap-4 rounded bg-neutral-100 px-8 py-24 text-center italic">
                <h1 className="text-xl">No Options Found</h1>
                <p>Please update your search and try again</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsList;
