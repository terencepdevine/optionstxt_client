import { CheckIcon } from "@heroicons/react/16/solid";

const OptionCheckbox = ({ isActive }) => {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded transition-all ${!isActive ? "border dark:border-neutral-500 dark:bg-neutral-600" : "dark:border-2 dark:border-blue-400 dark:bg-blue-500"}`}
    >
      {isActive && <CheckIcon className="h-4 w-4 fill-blue-100" />}
    </div>
  );
};

export default OptionCheckbox;
