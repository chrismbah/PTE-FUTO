import { leapfrog } from "ldrs";

export const BounceLoader = () => {
  leapfrog.register();

  return (
      <l-leapfrog size="20" speed="2.5" color="#00875a"></l-leapfrog>
  );
};
