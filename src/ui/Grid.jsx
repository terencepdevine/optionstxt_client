function Grid({ children, className = "" }) {
  return (
    <div
      className={`flex flex-col md:flex-row w-full gap-x-4 md:gap-x-8 px-4 md:px-8 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export default Grid;
