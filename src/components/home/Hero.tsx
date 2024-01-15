import hero from "../../assets/svg/home/hero.svg";

export default function Hero() {
  return (
    <div className="hero section">
      <div className="section-flex-between flex-wrap">
        <div>
          <p className="text-xl">Welcome to</p>
          <h1>Polymer and Textile Engineering, FUTO</h1>
          <h2>Federal University of Technology, Owerri</h2>
          <p>
            Here, you can access course outlines, learning materials, calculate{" "}
            <br />
            your CGPA, stay updated with the latest news, and connect with a{" "}
            <br />
            thriving community.
          </p>
        </div>
        <div>
          <img src={hero} alt="School Image" className="w-[500px] h-[500px]"/>
        </div>
      </div>
    </div>
  );
}
