import img1 from "../../assets/img/gallery/ict-building.jpg";
import img2 from "../../assets/img/gallery/front-gate2.jpg";
import img3 from "../../assets/img/gallery/lecture-hall.jpg";
import img4 from "../../assets/img/gallery/seet.jpeg";
import img5 from "../../assets/img/gallery/senate-building.webp";
import img6 from "../../assets/img/gallery/workshop.jpg";
import img7 from "../../assets/img/gallery/senate.jpg";
import img8 from "../../assets/img/gallery/statue.jpg";
import img9 from "../../assets/img/gallery/aerial-view.jpeg";
import img10 from "../../assets/img/gallery/building1.jpg";
import img11 from "../../assets/img/gallery/senate2.jpg";
import img12 from "../../assets/img/gallery/office.jpg";
import Lottie from "lottie-react";
import gallery from "../../json/animation/gallery.json";
import { motion } from "framer-motion";

const fadeInVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.4,
    },
  }),
};

export default function Gallery() {
  return (
    <div className="box-width">
      <div className="section">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-6">
          <div className="basis-1/2">
            <div className="p-0 sm:p-6">
              <div className="columns-1 gap-2 xxss:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4 sm:[&>img:not(:first-child)]:mt-8">
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={1}
                  className="rounded-lg min-h-[100px] object-cover mt-7"
                  src={img1}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={2}
                  className="rounded-lg object-cover"
                  src={img2}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={3}
                  className="rounded-lg object-cover min-h-[110px]"
                  src={img3}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={4}
                  className="rounded-lg object-cover min-h-[90px]"
                  src={img4}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={5}
                  className="rounded-lg object-cover min-h-[200px]"
                  src={img5}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={6}
                  className="rounded-lg object-cover"
                  src={img6}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={7}
                  className="rounded-lg object-cover"
                  src={img7}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={8}
                  className="rounded-lg object-cover min-h-[110px]"
                  src={img8}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={9}
                  className="rounded-lg object-cover"
                  src={img9}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={10}
                  className="rounded-lg object-cover min-h-[120px]"
                  src={img10}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={11}
                  className="rounded-lg object-cover min-h-[130px]"
                  src={img11}
                  alt="Image"
                />
                <motion.img
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={12}
                  className="rounded-lg object-cover min-h-[90px]"
                  src={img12}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className=" basis-1/2">
            <div className="bar-style" />
            <h2 className="">Gallery</h2>
            <h3 className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs">
              Explore the view
            </h3>
            <Lottie animationData={gallery} className="md:w-[80%] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
