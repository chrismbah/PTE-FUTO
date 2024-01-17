import vision from "../../assets/svg/home/vision.svg";
export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="box-width">
        <div className="section section-flex-between-reverse">
          <div>
            <img
              src={vision}
              alt="Our Vision"
              className="w-[500px] xmd:w-[700px] xmd:min-w-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-12">
            <div>
              <div className="bar-style" />
              <h3>Our Mission</h3>
              <p className="section-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                tempore magni ad libero dolores! Perferendis culpa quibusdam{" "}
                <br />
                doloribus commodi accusantium magnam mollitia incidunt!
                Voluptatibus nisi culpa dolor? Earum, delectus eaque.
              </p>
            </div>
            <div>
              <div className="bar-style" />
              <h3>Our Vision</h3>
              <p className="section-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                tempore magni ad libero dolores! Perferendis culpa quibusdam{" "}
                <br />
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
