const { default: MyCarousel } = require("../MyCarousel/MyCarousel")

const Banner = () => {
  return (
   <div className="bg-gray-200 dark:bg-dark ">
     <div className="container ">
      <div className="lg:flex items-center lg:gap-[104px] ml-[15px] lg:ml-0">
      <MyCarousel/>
     </div>
    </div>
   </div>
  )
}

export default Banner