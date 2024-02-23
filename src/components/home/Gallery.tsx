import img1 from "../../assets/img/gallery/aerial-view.jpeg";
import img2 from "../../assets/img/gallery/front-gate2.jpg";
import img3 from "../../assets/img/gallery/lecture-hall.jpg";
import img4 from "../../assets/img/gallery/seet.jpeg";
import img5 from "../../assets/img/gallery/senate-building.webp";

export default function Gallery() {
  return (
    <div className="">
      <div className="box-width">
        <div className="section">
          <h2 className="text-center">Gallery</h2>
          <h3 className="text-base sm:text-md md:text-lg font-[500] mb-3 text-center">
            Explore the view
          </h3>
          <div className="grid gap-4">
            <div className="grid xlg:grid-cols-4 gap-4">
              <div className="transition duration-300 ease-in-out relative cursor-pointer group bg-gray-50 h-[230px] sm:h-[300px] rounded-lg overflow-hidden">
                <img
                  className="h-full object-cover w-full"
                  src={img2}
                  alt="img1"
                />
                <div className="bg-black/20 backdrop-blur-sm absolute bottom-0 left-0 h-0 hidden group-hover:flex group-hover:h-full group-hover:w-full items-center justify-center overflow-hidden ">
                  <p className="text-xs text-white">FUTO's Front Entrance</p>
                </div>
              </div>
              <div className="bg-gray-50 h-[230px] sm:h-[300px] rounded-lg overflow-hidden">
                <img
                  className="h-full object-cover w-full"
                  src={img3}
                  alt="img1"
                />
              </div>
              <div className="sm:col-span-2 bg-gray-50 h-[230px] sm:h-[300px] rounded-lg overflow-hidden">
                <img
                  className="h-full object-cover w-full"
                  src={img5}
                  alt="img1"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-5 gap-4">
              <div className="bg-gray-50 h-[230px] sm:h-[300px] rounded-lg overflow-hidden sm:col-span-2">
                <img
                  className="h-full object-cover w-full"
                  src={img4}
                  alt="img1"
                />
              </div>
              <div className="bg-gray-50 h-[230px] sm:h-[300px] rounded-lg overflow-hidden sm:col-span-3">
                <img
                  className="h-full object-cover w-full"
                  src={img1}
                  alt="img1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
