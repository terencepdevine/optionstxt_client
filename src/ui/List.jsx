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
        className="z-100 absolute left-0 top-[calc(100%+8px)] w-max max-w-56 rounded-md border border-neutral-300 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <ul className="align flex flex-col gap-2">{children}</ul>
      </div>
    );
}

export default List;
