import { useContext, useState } from "react";
import List from "./List";
import ChecklistItem from "./ChecklistItem";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import OptionsContext from "../features/options/OptionsContext";

function Filters({ count }) {
  const [showDisplayOptions, setShowDisplayOpions] = useState(false);

  const {
    showDescription,
    onShowDescription,
    showDefaultValue,
    onShowDefaultValue,
    showValueRange,
    onShowValueRange,
  } = useContext(OptionsContext);

  return (
    <div className="sticky top-0 z-10 w-full border-b border-neutral-300 bg-white py-3 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="relative col-span-full flex flex-row-reverse items-center justify-between gap-4">
        <span className="shrink-0 text-sm italic text-neutral-500 dark:text-neutral-300">
          Displaying {count ? count : "0"} Option{count !== 1 && "s"}
        </span>
        <span className="relative">
          <button
            className="flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 dark:hover:text-blue-400"
            onClick={() => setShowDisplayOpions((prev) => !prev)}
          >
            Display Options
            <ListBulletIcon className="h-4 w-4" />
          </button>
          <List show={showDisplayOptions} handleShowMenu={setShowDisplayOpions}>
            <ChecklistItem
              name="Description"
              id="display-description"
              checked={showDescription}
              handleClick={onShowDescription}
            />
            <ChecklistItem
              name="Default Value Longer"
              id="display-default-value"
              checked={showDefaultValue}
              handleClick={onShowDefaultValue}
            />
            <ChecklistItem
              name="Value Range"
              id="display-value-range"
              checked={showValueRange}
              handleClick={onShowValueRange}
            />
          </List>
        </span>
      </div>
    </div>
  );
}

export default Filters;
