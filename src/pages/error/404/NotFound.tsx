import { Button } from "flowbite-react";
import { customButtonTheme } from "../../../themes/customButtton";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green1">404</p>
        <img src="../" alt="" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex flex-col ss:flex-row gap-y-6  items-center justify-center gap-x-6">
          <Button
           theme={customButtonTheme}
           color="primary"
           size="lg"
            href="/"
          >
            Go back home
          </Button>
          <Link to="/login" className="text-base font-semibold text-gray-900">
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
