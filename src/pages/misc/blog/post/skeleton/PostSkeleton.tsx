import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function PostSkeleton() {
  return (
    <>
      <Skeleton className="h-[10px] md:h-[16px] w-full md:w-[80%]" />
      <Skeleton className="h-[6px] md:h-[8px] w-12 md:w-20" />
      <Skeleton className="h-[6px] md:h-[8px] w-16 md:w-32" />
      <Skeleton className="h-28 md:h-36 mb-3 rounded-lg w-full" />
      <Skeleton
        count={3}
        className=" h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-full md:w-[80%]"
      />
      <Skeleton className=" w-[85%] h-[6px] sm:h-[8px] md:h-[12px] md:w-40" />
      <Skeleton
        count={2}
        className=" h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-[80%] md:w-[75%]"
      />
      <Skeleton
        count={3}
        className="h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-[90%] md:w-[85%]"
      />
      <Skeleton
        count={4}
        className="h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-[92%] md:w-[90%]"
      />
      <Skeleton className=" w-[70%] md:w-32 h-[6px] sm:h-[8px] md:h-[12px]" />
      <Skeleton
        count={1}
        className=" h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-full md:w-[65%]"
      />{" "}
      <Skeleton className=" w-[80%] md:w-16 h-[6px] sm:h-[8px] md:h-[12px]" />
      <Skeleton
        count={4}
        className=" h-[6px] sm:h-[8px] md:h-[10px] rounded-lg w-full md:w-[70%]"
      />{" "}
    </>
  );
}
