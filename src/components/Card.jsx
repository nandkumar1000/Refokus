import { BsArrowReturnRight } from "react-icons/bs";

export default function Card({ width, start, para, hover = "none", children }) {
  return (
    <div
      className={`bg-zinc-800 p-8 rounded-xl transition-all duration-300 ease-in-out hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      {/* Card Header */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">
            Innovate, Implement, Inspire
          </h1>
          <BsArrowReturnRight className="text-xl text-white" />
        </div>
        <h1 className="text-3xl font-bold mt-8 text-white">
          Driving the Digital Revolution
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Empowering businesses to thrive in a rapidly evolving digital world.
        </p>
      </div>

      {/* Card Content */}
      <div className="w-full mt-8">
        {start && (
          <>
            <h1 className="text-5xl font-bold text-white tracking-tight leading-tight">
              Tech Made Simple
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Harness the power of technology without the complexity. Our
              streamlined solutions are designed to help you succeed in the
              digital age.
            </p>
            <button
              className="mt-8 py-3 px-6 text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-zinc-800 transition-all duration-300"
              style={{ marginLeft: "100px" }}
            >
              Contact Us
            </button>
          </>
        )}

        {para && (
          <div>
            <p className="text-sm text-gray-400 font-medium mt-4">
              At the heart of technology lies the power to innovate. Our mission
              is to deliver solutions that empower businesses, streamline
              operations, and redefine the way the world connects and grows.
            </p>
            <button className="mt-6 py-2 px-4 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all">
              Learn More
            </button>
          </div>
        )}
      </div>

      {/* Additional Content Passed as Children */}
      {children && <div className="mt-8">{children}</div>}

      {/* Footer Section */}
      <div className="mt-6">
        <h3 className="text-lg text-white font-semibold">
          Join the Future of Tech
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Discover our cutting-edge solutions and become part of a community
          shaping the world of tomorrow.
        </p>
      </div>
    </div>
  );
}
