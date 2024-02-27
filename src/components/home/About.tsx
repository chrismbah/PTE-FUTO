import Lottie from "lottie-react";
import consultation from "../../json/animation/consultation.json";
import glasses from "../../json/animation/glasses.json";
import img2 from "../../assets/img/gallery/login.webp";
import img3 from "../../assets/img/gallery/senate.jpg";
import img4 from "../../assets/img/gallery/statue.jpg";
export default function About() {
  return (
    <>
      <div className="box-width">
        <div className="section flex items-center justify-between flex-col mmd:flex-row gap-6 py-10">
          <div className="w-full mmd:basis-2/5">
            <div className="bar-style" />
            <h2>About Us</h2>
            <p className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs mb-4">
              Empowering students to achieve academic excellence through
              learning resources and personalized support.
            </p>
            <div className="bg-white shadow-4 rounded-lg p-6 flex items-center mb-4 justify-start gap-3">
              <Lottie
                loop={true}
                animationData={glasses}
                className="w-[70px] sm:w-[90px]"
              />
              <div>
                <h4 className="text-green1 font-bold text-xs">Our Vision</h4>
                <p className="text-gray-700 text-xss sm:text-sm mmd:text-ss xlg:text-sm">
                  We envision graduates not just excelling in their chosen
                  fields, but becoming impactful contributors to society.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-4 basis-2/5 rounded-lg p-6 flex items-center justify-start gap-3">
              <Lottie
                loop={true}
                animationData={consultation}
                className="w-[70px] sm:w-[90px]"
              />
              <div>
                <h4 className="text-green1 font-bold text-xs">Our Mission</h4>
                <p className="text-gray-700 text-xss sm:text-sm mmd:text-ss xlg:text-sm">
                  We fuel academic pursuits through diverse resources,
                  interactive tools and tailored support systems.
                </p>
              </div>
            </div>
          </div>
          <div className="mmd:basis-3/5">
            <div className="flex gap-1 sm:gap-3">
              <div className="basis-1/2 flex items-center justify-center flex-col">
                <div className="basis-2/3">
                  <div className="relative">
                    <img
                      src={img2}
                      alt=""
                      className="h-full w-full object-cover rounded-lg bg-gray-100 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex items-start flex-col gap-1 sm:gap-3">
                <div className="basis-2/5">
                  <div className="relative">
                    <img
                      src={img4}
                      alt=""
                      className="h-full w-full object-cover rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 rounded-lg"></div>
                  </div>
                </div>
                <div className="basis-3/5">
                  <div className="relative">
                    <img
                      src={img3}
                      alt=""
                      className="h-full w-full object-cover rounded-lg bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="section section-flex-between-reverse">
          <div className="max-w-[500px] mmd:max-w-[900px]  mmd:w-[800px] mmd:min-w-[450px]">
          </div>
          <div className="flex flex-col items-start gap-8 xlg:gap-12">
            <div>
              <div className="bar-style" />
              <h3>Our Mission</h3>p
              <p className="section-p">
                Empowering students to achieve academic excellence through
                innovative learning resources and personalized support.
                <br />
                We fuel academic pursuits through diverse resources, interactive
                tools and tailored support systems.
              </p>
            </div>
            <div>
              <div className="bar-style" />
              <h3>Our Vision</h3>
              <p className="section-p">
                Nurturing a vibrant community of curious learners equipped to
                thrive in an ever-evolving world. We envision graduates not just
                excelling in their chosen fields, <br /> but embracing lifelong
                learning and becoming impactful contributors to society.
              </p>
            </div>
          </div>
        </div> */
  // <div className="grid grid-cols-2 gap-3">
  //       <div className="grid">
  //         <img
  //           src={img2}
  //           alt="about"
  //           className="w-full h-full object-cover rounded-lg bg-gray-100"
  //         />
  //       </div>
  //       <div className="grid grid-row-3 gap-3">
  //         <div className="row-span-2">
  //           <img src={img4} alt="" className="rounded-lg " />
  //         </div>
  //         <div className="row-span-2">
  //           <img src={img3} alt="" className="rounded-lg " />
  //         </div>
  //       </div>
  //     </div>
}
