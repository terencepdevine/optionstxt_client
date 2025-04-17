function ChecklistItem({ name, id, checked, handleClick }) {
  return (
    <li className="flex items-center gap-2">
      <input
        onChange={handleClick}
        checked={checked}
        id={id}
        type="checkbox"
        className="h-4 w-4 shrink-0 cursor-pointer rounded-md accent-blue-500"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer text-right font-medium ${
          checked
            ? "text-neutral-900 dark:text-neutral-100"
            : "text-neutral-500 dark:text-neutral-400"
        }`}
      >
        {name}
      </label>
    </li>
  );
}

export default ChecklistItem;
