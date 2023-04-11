import React from "react";
import Link from './Link'
import bg from '../public/static/images/squares.svg'



const Highlight7 = () => {
    

    const squares = <svg xmlns='http://www.w3.org/2000/svg' width='5' height='5'>
    <rect width='5' height='5' fill='#fff'/>
    <rect width='1' height='1' fill='#ccc'/>
    </svg>
    
    return (
        <div className="">
        <div style={{"backgroundImage": `url(https://raw.githubusercontent.com/brandendupont-mcw/jil_report/143d01c42cae48eacd5e473add0f84d615c27d47/public/static/images/squares.svg)`}} className="2xl:container 2xl:mx-auto lg:px-20 md:py-20 md:px-6 py-12 px-4 bg-hero mb-24 ">
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-6 ">

                                {/* Free Shopping Grid Card */}
                                <div className=" p-6 bg-gray-50 shadow-xs hover:shadow-lg hover:border-r-[9px] hover:border-b-[9px] border-black border-2 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">Research Briefs</p>
                    <p className=" font-normal text-base leading-6 text-gray-600 my-4">Data-driven research exploring the PFA's impact </p>
                    <Link href="/blog"  className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:border-maroon hover:text-maroon ">View here</Link>
                </div>
                {/* Safe Shopping Grid Card */}
                <div className=" p-6 bg-gray-50 shadow-xs hover:shadow-lg hover:border-r-[9px] hover:border-b-[9px] border-black border-2 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1  ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
                    <p className=" text-xl text-black font-semibold leading-5 mt-6">Data Tools</p>
                    <p className=" font-normal text-base leading-6 text-gray-600 my-4">Interactive visualizations to explore PFA changes</p>
                    <Link href="/data-tools" className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:border-maroon hover:text-maroon ">View here</Link>
                </div>

                {/* Personal Shopping Grid Card */}
            </div>
        </div>
        </div>
    );
};

export default Highlight7;
