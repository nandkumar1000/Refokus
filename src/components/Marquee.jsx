import { motion } from "framer-motion"
export default function Marquee({ imagesurl }) {
  return (
    <div className="w-full flex py-2 gap-5 whitespace-nowrap overflow-hidden">
      <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {imagesurl.map((url, index) => <img key={index} src={url} />)}
      </motion.div>
      <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
        {imagesurl.map((url, index) => <img key={index} src={url} />)}
      </motion.div>

    </div>
  );
}