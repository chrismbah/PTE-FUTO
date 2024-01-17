import {Button} from "flowbite-react"
import { customButtonTheme } from "../../themes/customButtton"
import { Link } from "react-router-dom"
import blog from "../../assets/svg/home/blog.svg";

export default function Blog() {
  return (
    <div className="bg-gray-50">
      <div className="box-width">
        <div className="section section-flex-between-reverse">
          <div>
            <img
              src={blog}
              alt="Learning Resources"
              className="w-[500px] xmd:w-[800px] xmd:min-w-[300px]"
            />
          </div>
          <div className="w-full">
            <h2 className="mb-5">Blog</h2>
            <p className="mb-5">
            Your go-to source for cutting-edge Polymer and Textile Engineering news. <br />
            Stay ahead with our coverage of tech advances, research, and industry trends. <br />
            Our expert team curates articles on renewables, EVs, robotics, and more. Trust our accurate, <br />
            reliable content for informed decisions.Join our vibrant community to fuel your success.
            </p>
            <Button theme={customButtonTheme} size={"lg"} color="primary">
              <Link to="/calculate-gp">Read Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
