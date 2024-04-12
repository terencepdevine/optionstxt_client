function Loader() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center">
      <div className="flex h-8 justify-between gap-1">
        <div className="relative h-full w-1 animate-grow bg-blue-600"></div>
        <div className="relative h-full w-1 animate-grow bg-blue-600 animation-delay-100"></div>
        <div className="relative h-full w-1 animate-grow bg-blue-600 animation-delay-200"></div>
        <div className="relative h-full w-1 animate-grow bg-blue-600 animation-delay-300"></div>
      </div>
    </div>
  );
}

export default Loader;
