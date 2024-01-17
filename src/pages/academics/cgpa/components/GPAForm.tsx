export default function GPAForm() {
  return (
    <div className="">
      <div className="grid ss:grid-cols-2 gap-6 mb-4">
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Level
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Level</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>{" "}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Semester</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Semester</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>{" "}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Semester</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>{" "}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5"
          >
            <option selected>Select Semester</option>
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
