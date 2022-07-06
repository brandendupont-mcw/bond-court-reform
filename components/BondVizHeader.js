import Map from "./Map";
import Link from 'next/link'



const vizHeader = () => {



    return (
      <div className=" bg-gray-50  p-10 ">
        <div className="grid gap-5 row-gap-1 lg:grid-cols-1">
          <div className="">
            <div className=" max-w-5xl mb-6">
              <div>
              </div>
              <h2 className="max-w-4xl mb-6 font-sans text-3xl font-bold  text-black sm:text-4xl sm:leading-none">
              <span className="text-dblue">Bond Decisions</span> in Cook County
              </h2>
              <p className="text-sm max-w-4xl text-gray-700 md:text-sm">
              All individuals arrested for a felony, misdemeanor domestic battery, or violation of an order of protection in Cook County currently appear for a bond court hearing before a judge who sets bond. Bond court judges may impose one of three bond types.
              <ul className="list-disc p-2 ml-4 mt-2 mb-2">
                <li>
               Individual recognizance bond (I-Bond) for which defendants are released without having to post monetary bail</li>
               <li> A deposit bond (D-Bond) for which defendants pay 10% of the bond amount or a cash bond (C-Bond) for which defendants pay the full value of the bond amount in order to secure release from jail</li>
               <li> No bail in which defendants are denied bail and ordered to remain in jail.</li>
                </ul>
              </p>
              <p className="text-sm max-w-4xl text-gray-700 md:text-sm mb-2">
              Under the PFA, two groups of individuals are initially detainable: 1) those eligible for detention based on a “public safety” standard, and 2) those eligible for detention based on a “willful flight” standard. 
              </p>

              <p className="text-sm max-w-4xl mt-4 text-gray-700 md:text-md mb-2">
             This tool presents data comparing existing Cook bond decisions with the new PFA detainable groups. For each PFA group it provides data on avoided bail costs and avoided average bond amount. Comparison data on existing 2021 Cook bond decisions and common offense level is provided. Scroll down &#129031; to the visualization or click read the full report.
              </p>
            </div>
            
            <div className="flex flex-row gap-2">



            <div className="p-3 sm:w-1/4 w-3/4 bg-gray-50 shadow-xs hover:shadow-lg border-r-[9px] border-b-[9px] border-black border-2 rounded-lg transition duration-300 ease-in-out -translate-y-1 translate-x-1 ">
            <Link
              href="/blog/cook-bond"
              
            >
             <div className="inline-flex items-center sm:text-md text-sm font-semibold transition-colors hover:underline duration-200 text-deep-purple-accent-400 hover:text-dblue cursor-pointer">Read the Full Report &#10141;</div> 
              </Link>
            </div>

            </div>
          
          </div>

        </div>
        
      </div>
    );
  };

export default vizHeader