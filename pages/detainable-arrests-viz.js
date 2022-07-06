import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { aq, op, table, loadCSV, FileAttachment } from 'arquero';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import _ from "lodash";
import Select from '@/components/Select'  ;
import VizHeader from '@/components/VizHeader.js'
import MyToggle from '@/components/toggle';

const FirstBar = dynamic(
    () => import('@/components/charts/bar'),
    { ssr: false }
  );

const FirstPie = dynamic(
  () => import('@/components/charts/ArrestPie'),
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
      { id: 'Statewide', name: 'Statewide' },
      { id: 'Cook', name: 'Cook' },
      { id: '1', name: 'Circuit 1' },
      { id: '2', name: 'Circuit 2' },
      { id: '3', name: 'Circuit 3' },
      { id: '4', name: 'Circuit 4' },
      { id: '5', name: 'Circuit 5' },
      { id: '6', name: 'Circuit 6' },
      { id: '7', name: 'Circuit 7' },
      { id: '8', name: 'Circuit 8' },
      { id: '9', name: 'Circuit 9' },
      { id: '10', name: 'Circuit 10' },
      { id: '11', name: 'Circuit 11' },
      { id: '12', name: 'Circuit 12' },
      { id: '13', name: 'Circuit 13' },
      { id: '14', name: 'Circuit 14' },
      { id: '15', name: 'Circuit 15' },
      { id: '16', name: 'Circuit 16' },
      { id: '17', name: 'Circuit 17' },
      { id: '18', name: 'Circuit 18' },
      { id: '19', name: 'Circuit 19' },
      { id: '20', name: 'Circuit 20' },
      { id: '21', name: 'Circuit 21' },
      { id: '22', name: 'Circuit 22' },
      { id: '23', name: 'Circuit 23' }
    ]



    const [riskData, setRiskData] = useState(lastTest1);
    const [pieData, setPieData] = useState(lastTest1);

    const [annData, setAnnData] = useState(lastTest1);

    const [selected, setSelected] = useState(people[0]);

    const [enabled, setEnabled] = useState(false);


    const data = table({
        country: ['USA', 'USA', 'Canada', 'Canada'],
        medal: ['gold', 'silver', 'gold', 'silver'],
        count: [10, 20, 7, 26]
      })


      useEffect(() => {
        (async () => {
          const users = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv');
          const pie = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/pie.csv');
          const ann = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/ann.csv');

          
          // eslint-disable-line
          const testData = users.params({ threshold: selected['id'] }).filter(d => d.Circuit === threshold ); 
          const filterPie = pie.params({ threshold: selected['id'] }).filter(d => d.Circuit === threshold ); 
          const filterAnn = ann.params({ threshold: selected['id'] }).filter(d => d.Circuit === threshold ); 
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

    console.log(jsonPie)


  const percVal = ['Detainable - Public Safety %','Detainable - Willful Flight %','Non-detainable %']


      console.log(selected['id'])



  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <VizHeader />

      

        <div className='h-32 p-4 mt-10  bg-white'>
          <div className='flex flex-row gap-1 sm:gap-2'>
          <h3 className='text-xl mt-3 font-extrabold'>Select Detainable Arrests:</h3>
      <Select  selected={selected} setSelected={setSelected} people={people} />
      </div>
      </div>
      <div className="mb-4"></div>

      <div  style={{height:"80px", width:"140px"}} className="ml-2"> 
                            
                            <div className="pt-2"></div>
                                              </div>

                                                    <div className="mb-4 ">
                                                      <span className='flex flew-row gap-1'>
          <h1 className="text-2xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-2xl md:leading-14">
          Detainable Arrests for <span className='border-b-2 border-maroon'>{selected['name']}</span> 
          </h1>
          </span>
          <hr className='max-w-sm mb-6 mt-4'></hr>
          </div>
         
    
      <div className='grid gap-10 grid-cols-2'>
            
    
            
      <span className=' w-[650px] h-[300px]  z-index-0 mb-10 '>
      <div className="text-lg leading-7 text-gray-700 ml-[260px] mb-2">Detainable Arrests by Offense</div>
      <FirstPie data={jsonPie}  />
          </span>

          <span className='ml-40 w-[300px] h-[250px] z-index-0 mb-0'>
      <div className="text-lg leading-7 text-gray-700 mb-4">Annual Number of Arrests</div>
      <MyToggle enabled={enabled} setEnabled={setEnabled} />
      {enabled ? <FirstBar className="z-0" data={jsonAnn} keyArray={['Detainable - Public Safety %','Detainable - Willful Flight %','Non-detainable %']} valueFormatString={ " >-0.1~%"}
           indexArray={"Year"} marginObject={{ top: 0, right: 0, bottom: 15, left: 0 }}
           layoutVal={"vertical"}
           colorArray={['#ffc413','#02aeff','#212121']}
            /> :  <FirstBar className="z-0" data={jsonAnn} keyArray={['Detainable - Public Safety','Detainable - Willful Flight','Non-detainable']} valueFormatString={">-,"}
            indexArray={"Year"} marginObject={{ top: 0, right: 0, bottom: 15, left:0 }}
            layoutVal={"vertical"}
            colorArray={['#ffc413','#02aeff','#212121']}
             /> }
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
         
    
      <div className='grid  lg:gap-4 xl:gap-6 grid-cols-2 '>
      <span className='h-[250px] '>
      <div className="text-lg leading-7 text-gray-700 ml-[50px]">Risk of New Criminal Activity</div>

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
