function ChecklistItem({ name, id, checked, handleClick }) {
  return (
    <li className="flex items-center gap-2">
      <input
        onChange={handleClick}
        checked={checked}
        id={id}
        type="checkbox"
        className="flex-shrink-0 h-4 w-4 accent-blue-500 rounded-md cursor-pointer"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer font-medium text-right ${
          checked ? "text-neutral-950" : "text-neutral-500"
        }`}
      >
        {name}
      </label>
    </li>
  );
}

export default ChecklistItem;
