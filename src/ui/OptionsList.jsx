import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getOptions } from "../services/apiOptions";

import Spinner from "./Spinner";
import OptionBlock from "../features/options/OptionBlock";
import Filters from "./Filters";

function OptionsList() {
  useEffect(function () {
    getOptions();
  }, []);

  const {
    isLoading,
    data: options,
    error,
  } = useQuery({
    queryKey: ["options"],
    queryFn: getOptions,
  });

  if (isLoading) return <Spinner />;

  if (error) {
    console.error(error);
    throw new Error("Couldn't load");
  }

  return (
    <>
      <div className="w-full lg:w-2/3">
        <div className="flex-col">
          <Filters count={options.length} />
          <div className="flex flex-col gap-2 pt-2 pb-8">
            {options.map((option) => (
              <OptionBlock option={option} key={option.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsList;
