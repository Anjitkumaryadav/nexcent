import React from "react"
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber"


const Helping = () => {
  return (
    <div className="bg-[#F5F7FA] lg:py-[64px] py-[45px] lg:px-[144px] px-[120px] dark:bg-dark">
     <div className="container">
        <div className="lg:flex items-center justify-between">
            <div className="mb-[30px] lg:mb-0">
                <h5 className="lg:text-[36px] md:text-[28px] sm:text-[25px] text-[16px] font-semibold font-Inter text-[#4D4D4D] dark:text-white">Helping a local </h5>
                <h4 className="lg:text-[36px] md:text-[28px] sm:text-[25px] text-[16px] font-semibold font-Inter text-[#4CAF4F] dark:text-white">business reinvent itself</h4>
                <p className="lg:text-base md:text-[10px] sm:text-[8px] text-[6px] font-normal font-Inter text-[#18191F] dark:text-white">We reached here with our hard work and dedication</p>
            </div>
           <div>
           <div className="flex gap-x-[30px] mb-[40px]">
                <div className="flex items-center gap-x-[16px]">
                    <img src="https://nexcent-react.vercel.app/assets/groups-fa8c7e7a.svg" alt="mamber" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D] dark:text-white">  <AnimatedNumber number={2245341} duration={4000}/></h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171] dark:text-white">Members</p>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img src='https://nexcent-react.vercel.app/assets/groups-fa8c7e7a.svg' alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D] dark:text-white"><AnimatedNumber number={46,328} duration={4000}/></h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171] dark:text-white">Clubs</p>
                    </div>
                </div>
            </div>
           <div className="flex gap-x-[50px]">
                <div className="flex items-center gap-x-[16px]">
                    <img src='https://nexcent-react.vercel.app/assets/events-1b4ed6f6.svg' alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D] dark:text-white"><AnimatedNumber number={828,867} duration={4000}/></h3>
                        <p className="lg:text-base md:text-[12px] text-[7px] font-Inter font-normal text-[#717171] dark:text-white">Event Bookings</p>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img src='https://nexcent-react.vercel.app/assets/payments-722fbd87.svg' alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D] dark:text-white"><AnimatedNumber number={1,926,436} duration={4000}/></h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171] dark:text-white">Payments</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Helping