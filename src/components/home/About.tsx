import Lottie from "lottie-react";
import consultation from "../../json/animation/consultation.json";
import glasses from "../../json/animation/glasses.json";
import img1 from "../../assets/img/gallery/aerial-view.jpeg";
import img2 from "../../assets/img/gallery/login.webp";
import img3 from "../../assets/img/gallery/aerial-view.jpeg";
import cap from "../../assets/svg/icons/grad-cap.svg";
export default function About() {
  return (
    <div className="">
      <div className="box-width">
        <div className="section flex items-center justify-between mmd:flex-row">
          <div className="basis-2/5">
            <div className="bar-style" />
            <h2>About Us</h2>
            <p className="text-gray-700 font-[500] text-xs mb-2">
              Empowering students to achieve academic excellence through
              learning resources and personalized support.
            </p>
            <div className="bg-white shadow-4 rounded-lg p-6 flex items-center mb-4 justify-start gap-3">
              <div className="w-[70px]">
                <Lottie loop={true} animationData={glasses} />
              </div>
              <div>
                <h4 className="text-green1 font-bold text-xs">
                  Our Vision
                </h4>
                <p className="text-gray-700 text-sm">
                  We envision graduates not just excelling in their chosen
                  fields, but becoming impactful contributors to society.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-4 basis-2/5 rounded-lg p-6 flex items-center justify-start gap-3">
              <div className="w-[70px]">
                <Lottie loop={true} animationData={consultation} />
              </div>
              <div>
                <h4 className="text-green1 font-bold text-xs">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-sm">
                  We envision graduates not just excelling in their chosen
                  fields, but becoming impactful contributors to society.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-3/5">
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="section section-flex-between-reverse">
          <div className="max-w-[500px] mmd:max-w-[900px]  mmd:w-[800px] mmd:min-w-[450px]">
          </div>
          <div className="flex flex-col items-start gap-8 xlg:gap-12">
            <div>
              <div className="bar-style" />
              <h3>Our Mission</h3>
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
}
