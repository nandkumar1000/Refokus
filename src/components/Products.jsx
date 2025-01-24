// Products.jsx
import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "arqitel",
      description:
        "Arqu executive and its employees continue to receive orders for customers, and customers that get the orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "techwave",
      description:
        "Techwave empowers businesses by providing innovative tech solutions and enhancing operational efficiency globally.",
      live: false,
      case: true,
    },
    {
      title: "medicorp",
      description:
        "Medicorp focuses on delivering top-notch healthcare services and products for patients and hospitals.",
      live: true,
      case: true,
    },
    {
      title: "greenenergy",
      description:
        "GreenEnergy specializes in renewable energy solutions, aiming to create a sustainable future for all.",
      live: true,
      case: false,
    },
    {
      title: "cloudworks",
      description:
        "CloudWorks helps organizations seamlessly transition to the cloud, ensuring secure and scalable solutions.",
      live: true,
      case: true,
    },
    {
      title: "nextgenAI",
      description:
        "NextGenAI develops cutting-edge artificial intelligence solutions tailored to diverse industry needs.",
      live: true,
      case: false,
    },
    {
      title: "urbanfurnish",
      description:
        "UrbanFurnish brings contemporary furniture designs to urban homes with a blend of style and comfort.",
      live: false,
      case: true,
    },
    {
      title: "aquamatic",
      description:
        "Aquamatic delivers innovative water purification systems designed to ensure safe and clean drinking water.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="space-y-10 bg-zinc-900 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] left-[40%] overflow-hidden"
        >
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <motion.div
                key={idx}
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                className={`w-full h-full  * 100}`}
              ></motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}