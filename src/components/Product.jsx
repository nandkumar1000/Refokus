// Product.jsx
import Button from "./Button";

export default function Product({ val, mover, count }) {
  return (
    <div className="w-full py-16 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-5 md:px-10 gap-8"
      >
        {/* Product Title */}
        <h1 className="text-4xl md:text-6xl capitalize font-semibold">{val.title}</h1>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-5">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">{val.description}</p>
          <div className="flex items-center gap-4">
            {val.live && <Button title="Live Demo" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}