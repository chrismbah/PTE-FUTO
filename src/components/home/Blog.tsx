import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import blog from "../../assets/svg/home/blog.svg";
import { useNavigateAuthUser } from "../../hooks/auth/useNavigateAuthUser";

export default function Blog() {
  const { navigateAuthUser } = useNavigateAuthUser();
  return (
    <div className="home-gray-bg">
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
            <div className="bar-style" />
            <h2 className="mb-1 md:mb-4">Blog</h2>
            <p className="section-p mb-5">
              Your go-to source for informative Polymer and Textile Engineering
              articles. <br />
              Stay ahead with our coverage of , artficial intelligence, tech advances and
              miscellanous content. <br />
              Trust our accurate, reliable content for informed decisions.{" "}
              <br /> Join our vibrant community to fuel your success.
            </p>
            <Button
              theme={customButtonTheme}
              size={"lg"}
              color="primary"
              onClick={() => navigateAuthUser("/blog")}
            >
              Read Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
