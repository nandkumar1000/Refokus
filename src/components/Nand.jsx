import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Nand() {
  const [images, setImages] = useState([
    { url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D", top: "18%", left: "50%", isActive: false },
    { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D", top: "30%", left: "44%", isActive: false },
    { url: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D", top: "35%", left: "56%", isActive: false },
    { url: "https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2h8ZW58MHx8MHx8fDA%3D", top: "40%", left: "60%", isActive: false },
    { url: "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlY2h8ZW58MHx8MHx8fDA%3D", top: "43%", left: "40%", isActive: false },
    { url: "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2h8ZW58MHx8MHx8fDA%3D", top: "38%", left: "52%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  const updateImages = (indexesToActivate) => {
    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: indexesToActivate.includes(index),
      }))
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercent = Math.floor(latest * 100);
    switch (scrollPercent) {
      case 0:
        updateImages([]);
        break;
      case 1:
        updateImages([0]);
        break;
      case 2:
        updateImages([0, 1]);
        break;
      case 3:
        updateImages([0, 1, 2]);
        break;
      case 4:
        updateImages([0, 1, 2, 3]);
        break;
      case 5:
        updateImages([0, 1, 2, 3, 4]);
        break;
      case 6:
        updateImages([0, 1, 2, 3, 4, 5]);
        break;
      default:
        updateImages([]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none select-none tracking-tight font-semibold">Nand</h1>
      </div>
      <div className="absolute w-full h-full top-0">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="absolute w-60 rounded-lg -translate-x-[50%] translate-y-[50%]"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}
