function Select({ children, name, value }) {
  return (
    <select name={name} id={name} defaultValue={value}>
      {children}
    </select>
  );
}

export default Select;
