import { useFormContext } from "react-hook-form";

function Input({ type, name, value = "", placeholder = "" }) {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      id={name}
      name={name}
      defaultValue={value}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;
