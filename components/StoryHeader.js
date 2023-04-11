
import Link from 'next/link'
import MyModal from './Modal';
import PopOver from './Popover';


const StoryHeader = () => {



    return (
      <div className=" pt-10 ml-2">
        <div className="grid gap-5 row-gap-1 lg:grid-cols-1">
          <div className="">
            <div className=" max-w-4xl mb-6">
              <div>
              </div>
              <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-maroon">
                Research Briefs
                </p>
              <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold  text-black sm:text-4xl sm:leading-none">
              The Pretrial Fairness Act
              </h2>
              <p className="text-base max-w-3xl text-gray-700 md:text-md">
            In January 2021, Illinois passed the Pretrial Fairness Act (PFA). The PFA fundamentally changes bond court practices and pretrial release in Illinois by abolishing cash bail, prohibiting pretrial detention for most defendants, creating new pretrial hearing processes, curtailing the conditions that may be placed on defendants released pretrial, and limiting revocation and modification of pretrial <br></br> release. <PopOver number={'[1]'} popoverText={["The PFA is part of a larger, omnibus crime bill (House Bill 3653) known as the Safety, Accountability, Fairness and Equity Act (or SAFE-T Act). Signed into law by Governor J.B. Pritzker on February 22, 2021 (PA 101-0652), the omnibus bill affects policing, victim compensation programs, prison sentencing credits, post-prison supervision, and pretrial release practices in the state. ", <a key="1" className='text-maroon underline font-bold' href="https://www.ilga.gov/legislation/publicacts/101/PDF/101-0652.pdf">Letter_Bill 1..764 (ilga.gov)</a>]}/>
              </p>

              <p className="text-base max-w-3xl mt-4 text-gray-700 md:text-md mb-10">
              The changes adopted in the PFA do not take effect until January 1, 2023. In order to provide Illinois’ criminal justice practitioners and policy makers with information prior to the effective date of the PFA, Loyola’s Center for Criminal Justice Research is producing a series of research briefs to provide context and insights for discussion of the potential impact of the law. By examining data from past practices, the goal of these research briefs is to estimate the potential impact of the PFA on future pretrial practices and outcomes.
              </p>
            </div>
            
            <div className="flex flex-row gap-2">





            </div>
          
          </div>

        </div>
        
      </div>
    );
  };

export default StoryHeader