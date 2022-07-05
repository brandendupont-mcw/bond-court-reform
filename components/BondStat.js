const Statistic = () => {
    return (


<section className="bg-white mb-8">
<div className="max-w-screen-xl px-4 mx-auto  sm:px-6 lg:px-8">


  <div className="mt-8 ">
    <dl className="grid grid-cols-1 gap-12 sm:grid-cols-3">
      <div
        className="flex flex-col px-6  text-center  rounded-lg row-span-2 p-8"
      >
            <p className="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm order-last mt-2">
              Total 2021 Cases 
            </p>

        <h6 className="text-4xl font-bold lg:text-5xl xl:text-5xl">46,261</h6>
      </div>

      <div
        className="flex flex-col px-6  text-center   p-8"
      >
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-sm order-last mt-2">
            Bail Costs Avoided Under the PFA
            </p>

        <h6 className="text-4xl font-bold lg:text-5xl xl:text-5xl ">$48.3M</h6>
      </div>
      <div
        className="flex flex-col px-6  text-center  p-8"
      >
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-sm order-last mt-2">
            Average Bond Amount Avoided Under the PFA
            </p>

        <h6 className="text-4xl font-bold lg:text-5xl xl:text-5xl">$6,000</h6>
      </div>
    </dl>
  </div>
</div>
</section>

    );
  };

export default Statistic