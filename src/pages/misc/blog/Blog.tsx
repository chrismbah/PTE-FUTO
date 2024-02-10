import { useEffect } from "react";
import { useGetPosts } from "../../../hooks/misc/blog/useGetPosts";
export default function Blog() {
  const { blogPosts, getPosts, addPosts } = useGetPosts();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="box-width ">
        <div className="page-section">
          <h2 className="py-4 border-b border-b-gray-200 w-full uppercase font-semibold text-xl ss:text-xll mb-4">
            Latest Articles
          </h2>
          {blogPosts?.map(({ title, sampleText, sampleImg }, i) => (
            <div key={i}>
              <div className="mb-4 max-w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={sampleImg}
                    alt={title}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {sampleText}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-green1 text-white rounded-md p-4 hover:p-6"
          onClick={addPosts}
        >
          Add Posts
        </button>
      </div>
    </div>
  );
}
