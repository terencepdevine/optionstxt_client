import useOutsideClick from "../hooks/useOutsideClick";

function List({ children, handleShowMenu, show }) {
  const handleClickOutside = () => {
    if (!show) handleShowMenu(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  if (!show) return;
  else
    return (
      <div
        ref={ref}
        className="p-4 top-[calc(100%+8px)] left-0 rounded-md absolute z-100 bg-white border border-neutral-300 w-max max-w-56"
      >
        <ul className="flex flex-col align gap-2">{children}</ul>
      </div>
    );
}

export default List;
