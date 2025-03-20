import { useContext } from "react";

import Loader from "./Loader";

import OptionsContext from "../features/options/OptionsContext";
import OptionBlock from "../features/options/OptionBlock";
import Filters from "./Filters";
import Motion from "./Motion";

function OptionsList() {
  const { isLoading, error, filteredOptions } = useContext(OptionsContext);

  if (error) {
    console.error(error);
    throw new Error("Could not load options");
  }

  return (
    <div className="order-2 w-full md:order-1 md:flex-1">
      <div className="flex-col">
        <Filters count={filteredOptions?.length} />
        {!isLoading ? (
          <Motion className="flex flex-col gap-2 pb-8 pt-2">
            {filteredOptions?.length > 0 ? (
              filteredOptions.map((option) => (
                <OptionBlock option={option} key={option.id} />
              ))
            ) : (
              <div className="flex flex-col gap-4 rounded bg-neutral-100 px-8 py-24 text-center italic dark:bg-neutral-800">
                <h1 className="text-xl">No Options Found</h1>
                <p>Please update your search and try again</p>
              </div>
            )}
          </Motion>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default OptionsList;
