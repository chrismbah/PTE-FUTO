/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Dashboard() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const Box = ({ num }: any) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        className="h-40 w-40 rounded-lg bg-green1 mb-8 mt-20"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box {num} </h1>
      </motion.div>
    );
  };

  return (
    <div className="section pt-40">
      <div className="flex gap-10">
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
      </div>
    </div>
  );
}
