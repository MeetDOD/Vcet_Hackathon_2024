import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Lottie from 'lottie-react';
import goldenAnimation from '../assets/prize/golden-trophy.json'; 
import silverAnimation from '../assets/prize/silver-trophy.json';
import bronzeAnimation from '../assets/prize/bronze-trophy.json';
import Heading from './Heading';
import { useEffect, useRef } from 'react';
import '../global.css'; // Import the CSS file for the rotating effect

const Prize = () => {
  const bronzePrizes = Array(3).fill({
    animationData: bronzeAnimation,
    amount: "5,000",
    size: "w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[350px] lg:h-[350px]",  // Responsive sizes
    borderColor: "#cd7f32"  // Bronze color
  });

  return (
    <div className="font-montserrat text-white">
      <Heading
        title1="Prize"
        title2="Money"
        subtitle="Code the Cosmos, Code for Cosmos and Code by Cosmos"
        sectionId="aboutUs"
      />
      <div className='mt-[-90px]'>
        <div className="flex flex-row justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-20 xl:gap-56 mt-[50px]">
          {/* Golden Prize */}
          <PrizeCard
            animationData={goldenAnimation}
            amount="50,000"
            color="#F5AF64"  
            gradientFrom="from-customBlue1"
            gradientTo="to-customBlue1"
            size="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[450px] lg:h-[450px]"  // Adjusted size
            scale={0.8}
            moveUp={true}
            borderColor="#FFD700"  // Golden color
          />
          {/* Silver Prize */}
          <PrizeCard
            animationData={silverAnimation}
            amount="20,000"
            color="#F5AF64"  
            gradientFrom="from-customBlue1"
            gradientTo="to-customBlue1"
            size="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[450px] lg:h-[450px]"  // Adjusted size
            scale={0.7}
            moveUp={true}   
            borderColor="#C0C0C0"  // Silver color
          />
        </div>
        {/* Bronze Prizes */}
        <div className="flex flex-row justify-center items-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-56">
          {bronzePrizes.map((prize, index) => (
            <PrizeCard
              key={index}
              animationData={prize.animationData}
              amount={prize.amount}
              color="#F5AF64" 
              gradientFrom="from-customBlue1"
              gradientTo="to-customBlue1"
              size={prize.size}
              scale={0.7}  
              moveUp={true}
              borderColor={prize.borderColor}  // Pass the bronze color
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PrizeCard = ({ animationData, amount, color, gradientFrom, gradientTo, size, scale = 1, moveUp = false, borderColor }) => {
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offSetX}px ${offSetY}px, black, transparent)`;
  const borderTrack = useRef();

  useEffect(() => {
    const updateMouseMove = (e) => {
      const rect = borderTrack.current.getBoundingClientRect();
      offSetX.set(e.clientX - rect.x);
      offSetY.set(e.clientY - rect.y);
    };

    const cardElement = borderTrack.current;
    cardElement.addEventListener('mousemove', updateMouseMove);

    return () => {
      cardElement.removeEventListener('mousemove', updateMouseMove);
    };
  }, [offSetX, offSetY]);

  const shadowStyle = {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.3)'
  };

  return (
    <motion.div
      className={`relative flex flex-col items-center overflow-hidden rounded-lg ${size}`}
      style={shadowStyle}
      ref={borderTrack}
    >
      <div className={`absolute inset-[-2px] bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-25 rounded-lg blur-3xl`} />
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        <Lottie 
          animationData={animationData} 
          loop 
          style={{ 
            transform: `scale(${scale})`, 
            marginTop: moveUp ? '-30px' : '0'
          }}  
          speed={0.5}
        />
        <div className="relative flex flex-col items-center justify-center mt-0">  
          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-montserrat font-semibold text-white"
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-montserrat font-semibold">₹</span>
            <span className="ml-1 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 text-sm sm:text-sm md:text-md lg:text-xl xl:text-2xl font-montserrat font-semibold">{amount}</span>
          </p>
        </div>
      </div>
      {/* Rotating Accent */}
      <div className="absolute inset-0 border-t-4 border-opacity-30 rotating-accent" style={{ borderColor }} />
    </motion.div>
  );
};

export default Prize;
