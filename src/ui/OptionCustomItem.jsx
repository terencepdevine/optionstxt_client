import { useContext } from "react";
import OptionsContext from "../features/options/OptionsContext";
import { XCircleIcon } from "@heroicons/react/24/solid";

const OptionCustomItem = ({ option }) => {
  const { onCustomOptions, updateCustomOption } = useContext(OptionsContext);

  return (
    <div className="flex justify-between gap-2 rounded-sm bg-white px-4 py-2 dark:bg-neutral-700">
      <div className="flex flex-row items-center gap-2">
        <span className="shrink-1 break-all text-sm font-medium leading-tight text-neutral-900 dark:text-neutral-100">
          &mdash;{option.name}
        </span>
      </div>
      <div className="flex flex-row gap-3">
        {option.value_type === "boolean" && (
          <select
            name=""
            id=""
            className="w-24 rounded-lg bg-neutral-200 px-2 py-1 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100"
            defaultValue={option.value}
            onChange={(e) => updateCustomOption(option, e.target.value)}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        )}

        {(option.value_type === "string" ||
          option.value_type === "directory") && (
          <input
            type="text"
            defaultValue={option.value}
            className="w-24 rounded-lg bg-neutral-200 px-4 py-1 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100"
            onChange={(e) => updateCustomOption(option, e.target.value)}
          />
        )}

        {(option.value_type === "number" || option.value_type === "float") && (
          <input
            type="number"
            defaultValue={option.value}
            className="w-24 rounded-lg bg-neutral-200 px-4 py-1 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100"
            onChange={(e) => updateCustomOption(option, e.target.value)}
          />
        )}

        {option.value_type === "options" && (
          <select
            className="w-24 rounded-lg bg-neutral-200 px-2 py-1 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100"
            onChange={(e) => updateCustomOption(option, e.target.value)}
          >
            {option.value_options?.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
          </select>
        )}

        <button onClick={() => onCustomOptions(option)} className="cursor-pointer">
          <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default OptionCustomItem;
