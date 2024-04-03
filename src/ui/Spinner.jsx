function Spinner() {
  return (
    <div className="w-full md:w-2/3 min-h-12 flex justify-center items-center">
      <div className="h-8 flex gap-1 justify-between">
        <div className="w-1 h-full bg-blue-600 relative animate-grow"></div>
        <div className="w-1 h-full bg-blue-600 relative animate-grow animation-delay-100"></div>
        <div className="w-1 h-full bg-blue-600 relative animate-grow animation-delay-200"></div>
        <div className="w-1 h-full bg-blue-600 relative animate-grow animation-delay-300"></div>
      </div>
    </div>
  );
}

export default Spinner;
