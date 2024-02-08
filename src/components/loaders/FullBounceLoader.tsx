import { leapfrog } from "ldrs";

export const BounceLoader = () => {
  leapfrog.register();

  return (
    <div className="text-center flex items-center justify-center h-screen w-full">
        <l-leapfrog size="30" speed="2.5" color="#00875a"></l-leapfrog>
    </div>
  );
};
