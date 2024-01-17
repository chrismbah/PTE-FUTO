import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import events from "../../assets/svg/home/events.svg";

export default function Events() {
  return (
    <div className="box-width">
      <div className="section section-flex-between">
        <div className="w-full">
          <div className="bar-style" />
          <h2 className="mb-5">Events</h2>
          <p className="mb-5">
            At Polymer and Textile Engineering FUTO, we believe in learning
            beyond the <br />
            classroom. Explore our diverse range of events, connecting passions
            and curiosities
          </p>
          <Button theme={customButtonTheme} size={"lg"} color="primary">
            <Link to="/calculate-gp">Events</Link>
          </Button>
        </div>
        <div>
          <img
            src={events}
            alt="Events"
            className="w-[500px] xmd:w-[800px] xmd:min-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
