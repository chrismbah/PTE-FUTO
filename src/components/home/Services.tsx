import { services } from "../../data/home/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="home-gray-bg">
      <div className="box-width">
        <div className="px-3 xsm:px-14 xsm:py-10 xsm:pb-32 py-10">
          <div className="mmd:flex items-center justify-center flex-col capitalize mb-3">
            <h2>
              {" "}
              <div className="bar-style" />
              What we offer
            </h2>
            {/* <h3 className="text-gray-700 font-medium text-ss ss:text-sm xlg:text-xs mb-3">
              What we offer our students
            </h3> */}
          </div>

          <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-5">
            {services.map(({ link, desc, icon, color, title }, i) => (
              <Link to={link} key={i} className="w-full">
                <div className="bg-white rounded-lg shadow-4 hover:shadow-md transition-shadow duration-250 ease-in-out p-12 h-[270px] sm:h-[300px] flex flex-col justify-center items-center">
                  <div
                    className={`${color === "dark-green" ? "bg-green1" : "bg-green5"} bg-green1 rounded-full p-3 mb-2`}
                  >
                    <img src={icon} alt={title} className="w-[25px]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-center text-base sm:text-md">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-xss ss:text-ss sm:text-sm text-center font-medium">
                    {desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
