function Grid({ children, className = "" }) {
  return (
    <div
      className={`mx-auto flex w-full flex-col gap-x-4 px-4 md:flex-row lg:gap-x-8 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Grid;
