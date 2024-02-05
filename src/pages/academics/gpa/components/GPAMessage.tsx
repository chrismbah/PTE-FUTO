import { useComputeGPA } from "../../../../hooks/academics/useComputeGPA";

export const GPAMessage = () => {
  const { studentGPA } = useComputeGPA();
  if (studentGPA >= 4.5 && studentGPA <= 5.0) {
    return <div className="text-sm">1st Class !!</div>;
  } else if (studentGPA >= 3.5 && studentGPA <= 4.49) {
    return <div className="text-sm">Second Class (Upper)</div>;
  } else if (studentGPA >= 2.4 && studentGPA <= 3.49) {
    return <div className="text-sm">Second Class (Lower)</div>;
  } else if (studentGPA >= 1.5 && studentGPA <= 2.39) {
    return <div className="text-sm">Third Class</div>;
  } else if (studentGPA >= 1.0 && studentGPA <= 1.49) {
    return <div className="text-sm">Pass</div>;
  } else if (studentGPA >= 0.0 && studentGPA <= 0.99) {
    return <div className="text-sm text-red-600">Fail</div>;
  }
};
