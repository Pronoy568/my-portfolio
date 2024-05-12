"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10  text-center">
      <p className="text-4xl bg-red-300 border-2 border-red-500 p-5 w-[50%] mx-auto rounded-xl">
        Something Went Wrong!!!
      </p>
      <p className="text-4xl bg-red-300 border-2 border-red-500 p-5 w-[50%] mx-auto rounded-xl mt-2">
        {error.message}
      </p>
      <button onClick={() => reset()}
      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
