import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { loadCSV} from 'arquero';
import _ from "lodash";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Select from '@/components/BondSelect'  ;
import VizHeader from '@/components/BondVizHeader.js'
import MyToggle from '@/components/toggle';
import BondStat from '@/components/BondStat'

const FirstBar = dynamic(
    () => import('@/components/charts/bar'),
    { ssr: false }
  );

const FirstPie = dynamic(
  () => import('@/components/charts/pie'),
  { ssr: false }
);


//import risk from '../data/viz/risk.csv'




import NewsletterForm from '@/components/NewsletterForm'



const MAX_DISPLAY = 5

export async function getStaticProps() {

  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}




export default function Home({ posts }) {

    const barData = [
      {
        "country": "AD",
        "eric": "howdy",
        "hot dog": 4,
        "burger": 102,
        "kebab": 199,
      },
      {
        "country": "joe",
        "hot dog": 4,
        "burger": 102,
        "sandwich": 54,
        "kebab": 199,
        "fries": 78,
        "donut": 60,
      },

    ]


    const lastTest1 = [{'hi':'loading'}]

    const pieData2 = [
      {
        "id": "Non-Probationable Forcible Felony & Sex Offenses",

        "value": 83,
  
      },
      {
        "id": "Class 3 Felony or Greater",

        "value": 83,
      }
    ]

    const people = [
      { id: '1', name: 'All Offense Types' },
      { id: '2', name: 'Detainable - Public Safety' },
      { id: '3', name: 'Detainable - Willful Flight' },
      { id: '4', name: 'Non-Detainable' },
  
    ]



    const [riskData, setRiskData] = useState(lastTest1);
    const [pieData, setPieData] = useState(lastTest1);

    const [annData, setAnnData] = useState(lastTest1);

    const [selected, setSelected] = useState(people[0]);

    const [enabled, setEnabled] = useState(false);





      useEffect(() => {
        (async () => {
          const users = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/cook_bond_stats.csv');
          const pie = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/bond_decision_pie.csv');
          const ann = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/bond_top_10_clean.csv');


          // eslint-disable-line
          const testData = users.params({ threshold: selected['name'] }).filter(d => d.offense_type === threshold ); 
          const filterPie = pie.params({ threshold: selected['name'] }).filter(d => d.offense_type === threshold ); 
          const filterAnn = ann.params({ threshold: selected['name'] }).filter(d => d.offense_type === threshold ); 
          // risk data



          setRiskData(testData.objects());
          setPieData(filterPie.objects());
          setAnnData(filterAnn.objects());

        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, [selected]);






    //const testData = users.filter(d => d.Circuit === circuitVal );

    const jsonTestAsync = JSON.parse(JSON.stringify(riskData));
    const newjsonPie = JSON.parse(JSON.stringify(pieData));
    const jsonAnn = JSON.parse(JSON.stringify(annData));

    console.log(jsonAnn)




  const percVal = ['Detainable - Public Safety %','Detainable - Willful Flight %','Non-detainable %']


  



  return (
    <>
      <PageSEO       title={"Bond Decisions in Cook County -- Viz Tool."} description={"This tool presents data comparing existing Cook bond decisions with the new PFA detainable groups. For each PFA group it provides data on avoided bail costs and avoided average bond amount. Comparison data on existing 2021 Cook bond decisions and common offense level is provided."} /> 
      <VizHeader />

      <div className='p-4'></div>
      

        <div className='h-32 ml-4  bg-transparent sticky top-0'>
          <div className='flex flex-row gap-1 sm:gap-2 bg-white'>
          <h3 className='text-xl mt-3 font-extrabold'>Select Offense Type:</h3>
      <Select  selected={selected} setSelected={setSelected} people={people} />
      </div>


      </div>

 
    
      <BondStat 
      totalCases={riskData[0]["Total Cases"]?.toLocaleString()}
      moneySaved={riskData[0]["Total Bail Costs Avoided-M"]}
      bondSaved={riskData[0]["Average Bond Amount"]?.toLocaleString()}
      offenseName={selected['name']}
       />





 
          
         

          {/* PIE SECTION  */}

          <aside  className="bg-gray-50 lg:flex h-auto overflow-hidden pb-4">
  <div  className="w-sm text-center lg:text-left">
    <div  className="max-w-xl mx-auto lg:ml-0 p-24">


      <p  className="mt-2 text-2xl font-bold text-black sm:text-2xl ">
        <span className='text-dblue'>{selected['name']}</span> <br></br>Compared to 2021 Bond Decisions in Cook
      </p>

      <p  className=" lg:mt-4 lg:block text-sm">
      Under the PFA, there are only two groups of individuals who are initially detainable: 1) those eligible for detention based on a “public safety” standard, and 2) those eligible for detention based on a “willful flight” standard.
      Explore how this law compares to existing 2021 Cook Bond Decisions.
      </p>


    </div>
  </div>

  <div  className="  w-[500px] h-[400px]  ">

   
   <FirstPie data={newjsonPie}  />


  </div>
          </aside>

              {/*  PIE SECTION   */}



      <div className=' mb-6 mt-10'></div>
                    

      <div className="mb-4 ">
          <h1 className="text-2xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-2xl md:leading-14 mb-2">
            Bail Decisions by Most Common Offense
          </h1>
          <div className="text-md text-gray-700 max-w-sm  mb-2"> <span className='text-dblue'>{selected['name']}</span> <br></br>Top 10 most common offenses. Toggle between count and percent.</div>
          <MyToggle enabled={enabled} setEnabled={setEnabled} />
          <hr className='max-w-sm mb-6 mt-4'></hr>
          </div>
         
    
      <div className='grid gap-10 grid-cols-1 '>
      <span className=' h-[450px] '>
      
      {enabled ? <FirstBar className="z-0" data={jsonAnn} keyArray={['C/D-Bond-Percent', 'I-Bond-Percent', 'No Bail-Percent']} valueFormatString={ " >-0.1~%"}
           indexArray={"Offense"} marginObject={{ top: 0, right: 200, bottom: 15, left:250}}
           layoutVal={"horizontal"}
           colorArray={['#02aeff','#005ada','#212121']}
            /> :  <FirstBar className="z-0" data={jsonAnn} keyArray={['C/D-Bond', 'I-Bond', 'No Bail']} valueFormatString={">-,"}
            indexArray={"Offense"} marginObject={{ top: 0, right: 200, bottom: 15, left:250}}
            layoutVal={"horizontal"}
            colorArray={['#02aeff','#005ada','#212121']}
             /> }




            </span>
            
    
            

      </div>

      <hr className='mt-6'></hr>


    </>
  )
}
