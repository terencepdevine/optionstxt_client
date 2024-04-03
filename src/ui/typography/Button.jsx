import { Link } from "react-router-dom";

function Button({ children, type = "default", to, icon, onClick, disabled }) {
  let buttonStyles =
    "flex items-center justify-center gap-2 bg-blue-500 text-white rounded-md px-4 py-2 border border-blue-500 drop-shadow-sm transition-all";
  buttonStyles = !disabled
    ? `${buttonStyles} hover:bg-blue-600`
    : `${buttonStyles} opacity-50 cursor-not-allowed`;
  buttonStyles = type === "full" ? `${buttonStyles} w-full` : buttonStyles;

  if (!to)
    return (
      <button className={buttonStyles} onClick={onClick} disabled={disabled}>
        {icon}
        {children}
      </button>
    );
  else
    return (
      <Link className={`${buttonStyles}`} onClick={onClick} disabled={disabled}>
        {icon}
        {children}
      </Link>
    );
}

export default Button;
