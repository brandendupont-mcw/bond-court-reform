import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { aq, op, table, loadCSV, FileAttachment } from 'arquero';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import _ from "lodash";
import Select from '@/components/BondSelect'  ;
import VizHeader from '@/components/VizHeader.js'
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
          const ann = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/bail_decisions_top_10.csv');


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
    const jsonPie = JSON.parse(JSON.stringify(pieData));
    const jsonAnn = JSON.parse(JSON.stringify(annData));

    console.log( jsonPie)




  const percVal = ['Detainable - Public Safety %','Detainable - Willful Flight %','Non-detainable %']


  



  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
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

          <aside class="relative overflow-hidden bg-gray-50 lg:flex">
  <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
    <div class="max-w-xl mx-auto lg:ml-0">


      <p class="mt-2 text-2xl font-bold text-black sm:text-2xl">
        <span className='text-dblue'>{selected['name']}</span> <br></br>Compared to 2021 Bond Decisions in Cook
      </p>

      <p class="hidden lg:mt-4 lg:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
      </p>


    </div>
  </div>

  <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
    

  </div>
          </aside>

              {/*  PIE SECTION   */}

      <div className='grid gap-10 grid-cols-2'>
            
    
            
      <span className=' w-[650px] h-[300px]  z-index-0 mb-10 '>
      <div className="text-lg leading-7 text-gray-700 ml-[260px] mb-2">Detainable Arrests by Offense</div>
      <FirstPie data={jsonPie}  />
          </span>

      </div>

      <hr className=' mb-6 mt-4'></hr>
                    

      <div className="mb-4 ">
          <h1 className="text-2xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-2xl md:leading-14">
            Risk Level of Individuals Arrested
          </h1>
          <div className="text-md text-gray-700 max-w-sm  ">Percent of individuals arrested with a risk of new criminal activity or failure to appear</div>
          <hr className='max-w-sm mb-6 mt-4'></hr>
          </div>
         
    
      <div className='grid gap-10 grid-cols-2 '>
      <span className=' h-[250px] '>
      <div className="text-lg leading-7 text-gray-700 ml-[210px]">Risk of New Criminal Activity</div>
            <FirstBar className="z-0" data={jsonTestAsync} keyArray={["NCA Risk"]}
             indexArray={"Offense Type"} marginObject={{ top: 0, right: 0, bottom: 0, left: 300 }} colorArray={['#212121']} valueFormatString={ " >-0.1~%"}
             layoutVal={"horizontal"} />
            </span>
            
    
            
      <span className=' w-[212px] h-[250px] z-index-0 mb-10'>
      <div className="text-lg leading-7 text-gray-700">Risk of Failure to Appear</div>
          <FirstBar className="z-0" data={jsonTestAsync} keyArray={["FTA Risk"]} indexArray={"Offense Type"} marginObject={{ top: 0, right: 0, bottom: 0, left: 10 }} valueFormatString={ " >-0.1~%"}
           layoutVal={"horizontal"} colorArray={['#212121']}/>
          </span>
      </div>

      <hr></hr>


    </>
  )
}
