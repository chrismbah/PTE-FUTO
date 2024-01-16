import vision from "../../assets/svg/home/vision.svg";
export default function About() {
  return (
    <div className="box-width ">
      <div className="section-flex-between">
        <div>
          <img src={vision} alt="Our Vision" className="w-[800px]" />
        </div>
        <div>
          <div className="flex flex-col justify-start">
            <div className="h-[2px] w-10 bg-green1" />
            <h2>Our Mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore magni ad libero dolores! Perferendis culpa quibusdam
              doloribus commodi accusantium magnam mollitia incidunt!
              Voluptatibus nisi culpa dolor? Earum, delectus eaque.
            </p>
          </div>
          <div>
            <div className="h-[2px] w-10 bg-green1" />
            <h2>Our Vision</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore magni ad libero dolores! Perferendis culpa quibusdam
              doloribus commodi accusantium magnam mollitia incidunt!
              Voluptatibus nisi culpa dolor? Earum, delectus eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
