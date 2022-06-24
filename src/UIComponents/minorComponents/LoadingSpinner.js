const LoadingSpinner = (props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-25 my-auto w-10 h-10 relative">
        <div className="bg-zinc-800 w-3.5 h-3.5 absolute top-0 left-0 animate-spinner"></div>
        <div
          className="bg-zinc-800 w-3.5 h-3.5 absolute top-0 left-0 animate-spinner"
          style={{ animationDelay: "-0.9s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
