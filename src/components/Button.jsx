import { FiCornerDownRight } from "react-icons/fi";

export default function Button({ title = "get Started" }) {
  return (
    <button className="min-w-[120px] px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full flex items-center justify-between gap-2 shadow-lg hover:bg-green-600 transition-all duration-300">
      <span>{title}</span>
      <FiCornerDownRight className="text-lg" />
    </button>
  );
}
