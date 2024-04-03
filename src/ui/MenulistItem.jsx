import { Link } from "react-router-dom";

function MenulistItem({ name, icon, color, href, setShowMenu }) {
  return (
    <li>
      <Link
        to={href}
        className={
          "flex justify-end gap-2 font-medium transition-colors " +
          (color === "red"
            ? "text-red-600 hover:text-red-800"
            : "text-neutral-950 hover:text-blue-600")
        }
        onClick={() => {
          if (setShowMenu) setShowMenu(false);
        }}
      >
        {name}
        <div className="w-6 h-6">{icon}</div>
      </Link>
    </li>
  );
}

export default MenulistItem;
