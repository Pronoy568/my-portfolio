import Image from "next/image";

const Blogs = async () => {
  return (
    <div id="blogs" className="py-14">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-semibold text-4xl mb-3 snap-center">
          MY <span className="text-[#5ee4ae]">BLOGS</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="https://i.ibb.co/c8RqrsV/Interview-questions.jpg"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              10 important questions for the interview
            </h1>
            <p className="text-lg text-gray-200">
              1. Null Vs Undefined 2. Double equal (==) vs Triple equal (===) 3.
              this keyword 4. Difference between bind, call and apply.....{" "}
            </p>
            <button className="mt-4">
              <a
                href="https://pronoydas870.medium.com/10-important-questions-for-the-interview-b064c5072cb6"
                className="btn text-white"
                target="_blank"
              >
                Details
              </a>
            </button>
          </div>
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="https://i.ibb.co/TkfkZbb/React.png"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              Top 10 Important Topics in React
            </h1>
            <p className="text-lg text-gray-200">
              If a program of Conditions is true then inside work in the
              program, else not working inside the program. The following...{" "}
            </p>
            <button className="mt-4">
              <a
                href="https://medium.com/@pronoydas870/10-important-basic-topics-in-javascript-4d9547e99c07"
                className="btn text-white"
                target="_blank"
              >
                Details
              </a>
            </button>
          </div>
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="https://i.ibb.co/v1w00Tq/es6.jpg"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              10 important topics in ES6 Features
            </h1>
            <p className="text-lg text-gray-200">
              Default parameters are named parameters that are initialized with
              default values if no value or undefined is passed...{" "}
            </p>
            <button className="mt-4">
              <a
                href="https://pronoydas870.medium.com/10-important-topics-in-es6-features-640688c2230f"
                className="btn text-white"
                target="_blank"
              >
                Details
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
