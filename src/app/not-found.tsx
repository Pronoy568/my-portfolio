import Link from "next/link";
import notFoundGif from "../assets/images/NotFound.gif";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <>
      <div className="container py-12">
        <div>
          <div className="text-center mt-20">
            <div className="flex justify-center items-center">
              <Image width={400} height={400} src={notFoundGif} alt="image" />
            </div>

            <div className="mt-6">
              <h1 className="text-red-500 text-3xl">Oops!</h1>
              <p className="text-white text-4xl my-4">Sorry !!!</p>
              <p className="text-red-700 font-semibold text-5xl">
                <i>Page Not Found</i>
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="btn text-white">
              <Link href="/">Go Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
