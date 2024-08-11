import Lottie from 'lottie-react';
import goldenAnimation from '../assets/prize/golden-trophy.json'; 
import silverAnimation from '../assets/prize/silver-trophy.json';
import bronzeAnimation from '../assets/prize/bronze-trophy.json';

const Prize = () => {

  const bronzePrizes = Array(3).fill({
    animationData: bronzeAnimation,
    amount: "₹ 5,000",
    size: 300
  });

  return (
    <div className="relative w-full h-full">
      <div className="relative z-10 px-4">
        <div className="flex justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-medium mt-5 text-white">PRIZES</p>
        </div>
        <div className='p-4 md:p-8'>
          <div className="flex flex-row justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-24 2xl:gap-48 mt-7">
            {/* Golden Prize */}
            <div className='relative flex flex-col items-center h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]'>
              <Lottie 
                animationData={goldenAnimation} 
                loop 
                className='h-full w-full'
                speed={0.01} 
              />
              <p className="absolute bottom-[-20px] text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-exo text-white flex items-center justify-center">
                <span className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-montserrat font-medium">₹</span>
                <span className="ml-1 sm:ml-1 md:ml-2 lg:ml-2 xl:ml-3 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat font-medium">50,000</span>
              </p>
            </div>
            {/* Silver Prize */}
            <div className='relative flex flex-col items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]'>
              <Lottie 
                animationData={silverAnimation} 
                loop 
                className='h-full w-full'
                speed={0.01} 
              />
              <p className="absolute bottom-[-20px] text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl font-exo text-white flex items-center justify-center">
                <span className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-montserrat font-medium">₹</span>
                <span className="ml-1 sm:ml-1 md:ml-2 lg:ml-2 xl:ml-3 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl font-montserrat font-medium">20,000</span>
              </p>
            </div>
          </div>
          {/* Bronze Prizes */}
          <div className="flex flex-row justify-center items-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-40 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-24 2xl:gap-48">
            {bronzePrizes.map((prize, index) => (
              <div key={index} className="relative flex flex-col items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]">
                <Lottie 
                  animationData={prize.animationData} 
                  loop 
                  className="h-full w-full"
                  speed={0.01} 
                />
                <p className="absolute bottom-[-20px] text-xs sm:text-xs md:text-sm lg:text-lg font-exo text-white flex items-center justify-center">
                  <span className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-montserrat font-medium">₹</span>
                  <span className="ml-1 sm:ml-1 md:ml-2 lg:ml-2 xl:ml-3 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl font-montserrat font-medium">5,000</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prize;
