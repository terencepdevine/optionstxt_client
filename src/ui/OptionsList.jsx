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
      <div className="w-full lg:w-2/3">
        <div className="flex-col">
          <Filters count={filteredOptions?.length} />
          <div className="flex flex-col gap-2 pb-8 pt-2">
            {filteredOptions?.map((option) => (
              <OptionBlock option={option} key={option.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsList;
