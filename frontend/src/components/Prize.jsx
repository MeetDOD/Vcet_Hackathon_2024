import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Lottie from 'lottie-react';
import goldenAnimation from '../assets/prize/golden-trophy.json'; 
import silverAnimation from '../assets/prize/silver-trophy.json';
import bronzeAnimation from '../assets/prize/bronze-trophy.json';
import { useEffect, useState, useRef } from 'react';

const Prize = () => {
  const bronzePrizes = Array(3).fill({
    animationData: bronzeAnimation,
    amount: "5,000",
    size: "w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[350px] lg:h-[350px]"  // Responsive sizes
  });

  return (
    <div className="relative w-full h-full bg-darkBackground"> {/* Dark space-like background */}
      <div className="relative z-10 px-4 py-8 bg-opacity-90 shadow-2xl rounded-lg">
        <div className="flex justify-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-medium mt-5 text-white drop-shadow-lg">
            Prizes
          </p>
        </div>
        <div className='p-4 md:p-8'>
          <div className="flex flex-row justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-20 xl:gap-56 mt-[50px]">
            {/* Golden Prize */}
            <PrizeCard
              animationData={goldenAnimation}
              amount="50,000"
              color="#F5AF64"  // customOrange
              gradientFrom="from-customBlue1"
              gradientTo="to-customBlue1"
              size="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[450px] lg:h-[450px]"  // Responsive sizes
              scale={0.9}
              moveUp={true}  // Add prop to move animation upward
            />
            {/* Silver Prize */}
            <PrizeCard
              animationData={silverAnimation}
              amount="20,000"
              color="#F5AF64"  // customOrange
              gradientFrom="from-customBlue1"
              gradientTo="to-customBlue1"
              size="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[450px] lg:h-[450px]"  // Responsive sizes
              scale={0.7}  // Scale down the animation
            />
          </div>
          {/* Bronze Prizes */}
          <div className="flex flex-row justify-center items-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-56">
            {bronzePrizes.map((prize, index) => (
              <PrizeCard
                key={index}
                animationData={prize.animationData}
                amount={prize.amount}
                color="#F5AF64"  // customOrange
                gradientFrom="from-customBlue1"
                gradientTo="to-customBlue1"
                size={prize.size}  // Responsive container sizes
                scale={0.7}  // Scale down the animation inside the container
                moveUp={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PrizeCard = ({ animationData, amount, color, gradientFrom, gradientTo, size, scale = 1, moveUp = false }) => {
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offSetX}px ${offSetY}px, black, transparent)`;
  const borderTrack = useRef();
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <motion.div
      className={`relative flex flex-col items-center overflow-hidden transition-transform transform border-[1px] border-white border-opacity-15 rounded-lg ${size}`}  // Responsive container sizes
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      ref={borderTrack}
    >
      <div className={`absolute inset-[-2px] bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-25 rounded-lg blur-3xl`} />
      <div className="relative flex justify-center items-center w-full h-full">
        <Lottie 
          animationData={animationData} 
          loop 
          style={{ 
            transform: `scale(${scale})`, 
            marginTop: moveUp ? '-30px' : '0'  // Move the animation upward
          }}  
          speed={0.5}
        />
      </div>
      <motion.div
        className="absolute inset-0 border-[6px] rounded-lg"  // Keep the motion border size as is
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          opacity: isHovered ? 1 : 0,
          borderColor: color,
          transition: 'opacity 0.3s ease, box-shadow 0.3s ease'
        }}
      />
      <div className="absolute bottom-4 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-white"
           style={{
             textShadow: '0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)',
             marginTop: '2rem',  // Increased margin to separate the amount from the trophy
           }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold">₹</span>
          <span className="ml-2 md:ml-3 lg:ml-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-semibold">{amount}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Prize;
