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
    <div className="sticky z-10 top-0 bg-white bg-opacity-90 backdrop-blur-sm border-b border-neutral-300 w-full py-3">
      <div className="col-span-full flex flex-row-reverse justify-between items-center gap-4 relative">
        <span className="text-sm italic text-neutral-500 shrink-0">
          (Displaying {count} Options)
        </span>
        <span className="relative">
          <button
            className="flex gap-2 items-center text-sm font-medium shrink-0"
            onClick={() => setShowDisplayOpions((prev) => !prev)}
          >
            Display Options
            <ListBulletIcon className="w-4 h-4" />
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
