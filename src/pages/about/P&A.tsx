import Footer from "../../components/footer/Footer";
export default function PhilosophyAndObjectives() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="2xl:max-w-[1480px] w-full mx-auto">
        <div className="page-section">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {" "}
            <div className="bar-style" />
            Department of Polymer and Textile Engineering, FUTO
          </h1>
          <h4 className="mb-6 font-semibold text-md">
            Philosophy and Objectives
          </h4>
          <div className="mb-5">
            <h5 className="text-base font-medium text-gray-900">Philosophy</h5>
            <p className="text-xs text-gray-700 leading-7 mb-5">
              In pursuance of the overall philosophy of the Federal University
              of Technology, Owerri, the Department of Polymer Engineering is
              designed to produce undergraduates who will give a positive thrust
              to the technological development of Nigeria in the area of Textile
              Science and Engineering Technology. Additionally, they are groomed
              in such a manner that they will be able to effectively function in
              the society within the context of the needs and resources of the
              society as well as emphasizing the need to be innovative in a
              competitive world. The philosophy, therefore, has a strategy of
              human resource development with broader goals of contributing to
              the economic development and growth of the Nation.
            </p>
            <p className="text-xs text-gray-700 leading-7">
              Finally, the strategy will ensure that the graduate is adequately
              prepared to be socially acceptable and be in a true position to be
              of service to society. The programme of study will be
              student-centred and School (Faculty) based on inter-departmental
              and inter-School inputs whenever necessary. The programme offered
              in this Department for the Bachelor of Engineering Degree is
              designed to give each student a thorough grounding in his specific
              professional area while at the same time giving him the
              flexibility of choice in tailoring his individual programme to fit
              his personal career plans for immediate employment in industries,
              self-employment or for post-graduate studies and research.
            </p>
          </div>
          <div className="mb-5">
            <h5 className="text-base font-medium text-gray-900">Objectives</h5>
            <p className="text-xs text-gray-700 leading-7 mb-2">
              The principal objectives of the Polymer and Textile Engineering
              Programme include the following:
            </p>
            <ul className=" space-y-1 text-gray-700 text-xs list-disc list-inside mb-4 leading-7">
              <li>
                The training of engineers who are capable of meeting the changes
                of the Nigerian Petrochemical industries, natural gas,
                agro-based industries as well as those of the general Nigerian
                Socio-economic sectors.
              </li>
              <li>
                {" "}
                The inculcation of the basic principles and skills underlying
                the planning, designing, operating, managing or in fact
                maintaining the respective industrial outfits in the oil and gas
                industries, agro-based and solid mineral resources as well as
                the environment.
              </li>
              <li>
                The stimulation and motivation of every student in the pursuit
                of higher standards and achievements in the general technology
                field either through experimental/industrial research or through
                the pursuit of higher education qualifications and professional
                excellence as well as consultancy.
              </li>
            </ul>
            <p className="text-gray-700 text-xs mb-4 ">
              The graduate of this programme may expect fulfilling employment
              opportunities in the following Nigerian industrial sectors:
            </p>
            <ul className=" space-y-1 text-gray-700 text-xs list-disc list-inside mb-4 leading-7">
              <li>Petrochemical/Refineries</li>
              <li>
                Petroleum and natural gas industries involved in exploration,
                drilling, production, servicing, transporting, promotion and
                marketing.
              </li>
              <li>Engineering Consultancy,</li>
              <li>Design and construction companies.</li>
              <li>
                Works in Insurance companies and financial institutions eg
                banks.
              </li>
              <li>
                Engaged in solving environmental problems such as offshore oil
                spills, corrosion in pipelines, tankers etc.
              </li>
              <li>
                Lecture in academic institutions with polymer and Textile,
                chemical, petroleum and materials engineering departments.
              </li>
              <li>
                Engage in agro-based industries, food industries, lumber
                industries, economic renewable plants that yield polymers such
                as grains, rubber lattices, cashew-nut shell liquids, tannins,
                as well as animal husbandry which yields protein polymer.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
