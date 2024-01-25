import Lottie from "lottie-react";
import vision from "../../utils/animation/vision.json";

export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="box-width">
        <div className="section section-flex-between-reverse">
          <div className="max-w-[500px] mmd:max-w-[900px]  mmd:w-[800px] mmd:min-w-[450px]">
            <Lottie loop={true} animationData={vision} />
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
        </div>
      </div>
    </div>
  );
}
