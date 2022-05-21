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


const FirstBar = dynamic(
    () => import('@/components/charts/bar'),
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

    const lastTest = [{"Circuit":"23","Offense Type":"Non-Probationable Forcible Felony & Sex Offenses","Annual Cases":333,"FTA Risk":0.12,"NCA Risk":0.37},
    {"Circuit":"23","Offense Type":"Weapon Offenses","Annual Cases":190,"FTA Risk":0.14,"NCA Risk":0.4},{"Circuit":"23","Offense Type":"Domestic Violence/VOOP","Annual Cases":3116,"FTA Risk":0.11,"NCA Risk":0.29},
    {"Circuit":"23","Offense Type":"Class 3 Felony or Greater","Annual Cases":1500,"FTA Risk":0.17,"NCA Risk":0.4},{"Circuit":"23","Offense Type":"Non-Detainable","Annual Cases":9820,"FTA Risk":null,"NCA Risk":null}]

    const lastTest1 = [{'hi':'loading'}]

    const people = [
      { id: 'Statewide', name: 'Statewide' },
      { id: 2, name: '2' },
      { id: 3, name: '3' }
    ]


    const [riskData, setRiskData] = useState(lastTest1);

    const [circuitVal, setCircuit] = useState('Statewide');

    const [selected, setSelected] = useState(people[0]);


    const data = table({
        country: ['USA', 'USA', 'Canada', 'Canada'],
        medal: ['gold', 'silver', 'gold', 'silver'],
        count: [10, 20, 7, 26]
      })


      useEffect(() => {
        (async () => {
          const users = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv');

          
          // eslint-disable-line
          const testData = users.params({ threshold: selected['id'] }).filter(d => d.Circuit === threshold ); 
          
          setRiskData(testData.objects());

        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, [selected]);






    //const testData = users.filter(d => d.Circuit === circuitVal );

    const jsonTestAsync = JSON.parse(JSON.stringify(riskData))






  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <VizHeader />

      

        <div className='h-32 p-4 mt-10'>
          <div className='flex flex-row gap-1 sm:gap-2'>
          <h3 className='text-xl mt-3 font-extrabold '>Select Detainable Arrests By</h3>
      <Select selected={selected} setSelected={setSelected} />
      </div>
      </div>

      <button className='bg-black text-white p-4' onClick={e => setCircuit( '10')}>
            <h1>
              HI
          </h1>
        </button>
      <div className='w-full h-96 z-index-0'>

      <FirstBar className="z-0" data={jsonTestAsync} />
      </div>
      <div className='w-full h-96'>

<FirstBar data={jsonTestAsync} />
</div>

    </>
  )
}
