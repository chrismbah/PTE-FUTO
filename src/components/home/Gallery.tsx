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

export default function Gallery() {
  return (
    <div className="box-width">
      <div className="section">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-6">
          <div className="basis-1/2">
            <div className="p-0 sm:p-6">
              <div className="columns-1 gap-2 xxss:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4 sm:[&>img:not(:first-child)]:mt-8">
                <img
                  className="rounded-lg min-h-[100px] object-cover"
                  src={img1}
                />
                <img className="rounded-lg object-cover" src={img2} />
                <img className="rounded-lg object-cover" src={img3} />
                <img
                  className="rounded-lg object-cover min-h-[90px]"
                  src={img4}
                />
                <img
                  className="rounded-lg object-cover min-h-[200px]"
                  src={img5}
                />
                <img className="rounded-lg object-cover" src={img6} />
                <img className="rounded-lg object-cover" src={img7} />
                <img
                  className="rounded-lg object-cover min-h-[110px]"
                  src={img8}
                />
                <img className="rounded-lg object-cover" src={img9} />
                <img className="rounded-lg object-cover" src={img10} />
                <img
                  className="rounded-lg object-cover min-h-[130px]"
                  src={img11}
                />
                <img className="rounded-lg object-cover" src={img12} alt="" />
              </div>
            </div>
          </div>
          <div className=" basis-1/2">
            <div className="bar-style" />
            <h2 className="">Gallery</h2>
            <h3 className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs">
              Explore the view
            </h3>
            <Lottie animationData={gallery} className="w-[80%] " />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="grid gap-4">
            <div className="grid xlg:grid-cols-4 gap-4">
              <div className="group relative items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[230px] sm:h-[300px]">
                  <img
                    src={img2}
                    alt="img1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className=" text-ss ss:text-sm md:text-xs text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Federal University of Technology, Owerri ( FUTO ) Main
                    Entrance.
                  </p>
                </div>
              </div>
              <div className="group relative items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[230px] sm:h-[300px]">
                  <img
                    src={img3}
                    alt="img3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className=" text-ss ss:text-sm md:text-xs text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Polymer and Textile Engineering Department Lecture Hall 1.
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2 group relative items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[230px] sm:h-[300px]">
                  <img
                    src={img5}
                    alt="img3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className=" text-ss ss:text-sm md:text-xs text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Federal University of Technology, Owerri ( FUTO ) Senate
                    Building.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-5 gap-4">
              <div className="sm:col-span-2 group relative items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[230px] sm:h-[300px]">
                  <img
                    src={img4}
                    alt="img3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className=" text-ss ss:text-sm md:text-xs text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    School of Engineering and Engineering Technology ( SEET )
                    Faculty Building.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-3 group relative items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-[230px] sm:h-[300px]">
                  <img
                    src={img6}
                    alt="img3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green4/30 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className=" text-ss ss:text-sm md:text-xs text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Polymer and Textile Engineering Department Workshop 1
                  </p>
                </div>
              </div>
            </div>
          </div> */
}
