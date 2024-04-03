function Textarea({ children, name, placeholder = "", rows = 3 }) {
  return (
    <textarea id={name} name={name} placeholder={placeholder} rows={rows}>
      {children}
    </textarea>
  );
}

export default Textarea;
