import { useEffect, useState } from "react";

export default function GPAForm() {
  const [level, setLevel] = useState<string>("");
  const [semester, setSemester] = useState<string>("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  return (
    <div className="">
      <div className="grid ss:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="level"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Level
          </label>
          <select
            id="level"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option selected>Select Level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
            onChange={(e) => setSemester(e.target.value)}
          >
            <option selected>Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
          </select>
        </div>
      </div>

      <div className="grid xss:grid-cols-3 gap-4">
        <div className="bg-gray-50 border border-gray-300 border-b-0 text-gray-900 text-sm rounded-t-lg focus:ring-green1 focus:border-green1 block w-full p-2.5">
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Course Title
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 border-b-0 text-gray-900 text-sm rounded-t-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Course</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <input
            className="bg-gray-50 border border-gray-300 border-t-0 text-gray-900 text-sm rounded-b-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
            type="text"
            placeholder="PTE 304"
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Credit Unit
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Unit</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Grade
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Grade</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
}
