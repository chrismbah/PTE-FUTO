import vision from "../../assets/svg/home/vision.svg";
export default function About() {
  return (
    <div className="bg-gray-50">
<div className="box-width">
      <div className="section section-flex-between-reverse gap-4">
        <div>
          <img
            src={vision}
            alt="Our Vision"
            className="w-[500px] xmd:w-[800px] xmd:min-w-[500px]"
          />
        </div>
        <div className="flex flex-col items-start gap-8">
          <div>
            <div className="h-[2px] w-10 bg-green1" />
            <h3>Our Mission</h3>
            <p className="section-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore magni ad libero dolores! Perferendis culpa quibusdam <br />
              doloribus commodi accusantium magnam mollitia incidunt!
              Voluptatibus nisi culpa dolor? Earum, delectus eaque.
            </p>
          </div>
          <div>
            <div className="h-[2px] w-10 bg-green1" />
            <h3>Our Vision</h3>
            <p className="section-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore magni ad libero dolores! Perferendis culpa quibusdam <br />
              doloribus commodi accusantium magnam mollitia incidunt!
              Voluptatibus nisi culpa dolor? Earum, delectus eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}
