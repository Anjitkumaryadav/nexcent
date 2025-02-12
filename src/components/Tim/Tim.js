import {GoArrowRight} from 'react-icons/go'




const Tim = () => {
  return (
    <div className="bg-[#F5F7FA] py-[32px] lg:px-[144px] px-[20px] dark:bg-dark">
        <div className="container ">
          <div className="lg:flex gap-[78px]">
          <div className='lg:flex justify-center'>
                <img src='https://nexcent-react.vercel.app/assets/tesla-1b22d4b5.svg' alt="image" />
            </div>
            <div className="xl:max-w-[748px] w-full ">
                <p className="lg:text-base text-[12px] font-Inter font-medium text-[#717171] lg:leading-[24px] dark:text-white">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className="lg:text-[20px] text-[14px] font-semibold font-Inter text-[#4CAF4F] mt-[16px] mb-[8px]">Tim Smith</h5>
                <p className="lg:text-base text-[12px] font-normal font-Inter text-[#89939E] dark:text-white">British Dragon Boat Racing Association</p>
                <div className='flex flex-wrap items-center gap-[41px] mt-[32px] dark:bg-gray-400 dark:rounded-xl'>
                <img src="https://nexcent-react.vercel.app/assets/Logo0-cdf68f3a.svg" alt="logo" />
                <img src="https://nexcent-react.vercel.app/assets/Logo1-7269e84d.svg" alt="logo" />
                <img src="https://nexcent-react.vercel.app/assets/Logo2-a989033d.svg" alt="logo" />
                <img src="https://nexcent-react.vercel.app/assets/Logo3-2585bd33.svg" alt="logo" />
                <img src="https://nexcent-react.vercel.app/assets/Logo4-ead07602.svg" alt="logo" />
                <img src="https://nexcent-react.vercel.app/assets/Logo5-e47d5047.svg" alt="logo" />
                <div className='flex items-center lg:text-[18px] text-[13px] font-Inter font-semibold text-[#1a771e] lg:leading-[28px] gap-x-[8px] '>
                <h3>Meet all customers</h3>
                <GoArrowRight/>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tim