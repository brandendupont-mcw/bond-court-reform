import Link from '@/components/Link'

export default function ListLayout() {

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-10">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Data Tools
          </h1>
          <ul  className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">

                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/bond-decision-cook`} className="text-gray-900 dark:text-gray-100 hover:text-maroon">
                        Bond Decisions in Cook County
                        </Link>
                      </h3>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    This tool presents data comparing existing Cook bond decisions with the new PFA detainable groups. For each PFA group it provides data on avoided bail costs and avoided average bond amount. Comparison data on existing 2021 Cook bond decisions and common offense level is provided.
                    </div>
                  </div>
                </article>
              </ul>
          <ul  className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">

                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/detainable-arrests-viz`} className="text-gray-900 dark:text-gray-100 hover:text-maroon">
                        The Volume and Characteristics of Arrests Eligible for Detention.
                        </Link>
                      </h3>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    This tool presents data on the distribution of detainable arrests. It breaks down their offense, failure to appear (FTA), and risk level. 
                    </div>
                  </div>
                </article>
              </ul>
        </div>
        <ul>

        </ul>
      </div>

   
    </>
  )
}
