import { services } from "../../data/home/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="home-gray-bg">
      <div className="box-width">
        <div className="px-3 ss:px-10 sm:px-4 xsm:px-14 xsm:py-16 xsm:pb-32 py-8">
          <div className="flex items-center justify-center flex-col mb-1">
          <h2 className="relative text-center ">Our Services</h2>
          <div className="bar-style" />
          </div>
          <h3 className="text-base sm:text-md md:text-lg font-[500] mb-3 text-center">
            What we offer our students
          </h3>
          <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-5">
            {services.map(({ link, desc, icon, color, title }, i) => (
              <Link to={link} key={i} className="w-full">
                <div className="bg-white rounded-lg shadow-4 hover:shadow-md transition-shadow duration-250 ease-in-out p-12 h-[300px] flex flex-col justify-center items-center">
                  <div
                    className={`${color === "dark-green" ? "bg-green1" : "bg-green5"} bg-green1 rounded-full p-3 mb-2`}
                  >
                    <img src={icon} alt={title} className="w-[25px]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-center text-md">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-ss sm:text-sm text-center">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
