import Map from "./Map";
import Link from 'next/link'



const Statistic = () => {



    return (
      <div className=" bg-white   p-10 mb-32 ">
        <div className="grid gap-5 row-gap-2 lg:grid-cols-2">
          <div className="xl:ml-14 sm:ml-2 flex flex-col justify-center">
            <div className=" max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-maroon">
                Loyola University Chicago
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                Tracking the
                <br className=" md:block" />
                Pretrial Fairness Act {' '}
                <span className="inline-block text-deep-purple-accent-400">
                in Illinois 
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-md">
              In January 2021, the Illinois General Assembly passed House Bill 3653  – an omnibus crime bill known as the Safety, Accountability, Fairness and Equity Act that most notably abolishes cash bail.

               <span className="px-1 py-1 mb-4 text-md font-bold text-maroon">
                We're tracking how the law impacts bond court outcomes, pretrial, and jail population across Illinois.</span>
              </p>
            </div>
            
            <Link
              href="/about"
              
            >
             <div className="inline-flex items-center text-md font-semibold transition-colors hover:underline duration-200 text-deep-purple-accent-400 hover:text-maroon cursor-pointer">Learn more &#10141;</div> 
              </Link>
          
          </div>
          <div className="sm:mt-4 hidden lg:block">
         
          <Map />
          </div>

        </div>
        
      </div>
    );
  };

export default Statistic