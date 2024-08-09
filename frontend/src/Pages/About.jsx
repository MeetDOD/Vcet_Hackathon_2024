/* eslint-disable react/no-unescaped-entities */
import Image1 from '../assets/moon-inverse1.png';
import ImageRotate from '../assets/moon-sign-3-450x450.png';
import ImageScale from '../assets/moon-sign-1-1.png';

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex justify-center">
        <p className="text-[40px] md:text-[50px] lg:text-[60px] font-orbitron font-bold mt-5 text-[#d88a4c]">About Us</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 px-5 md:px-10 lg:px-20">
        <div className="relative md:ml-[130px] lg:ml-[230px] flex-shrink-0">
          <img
            src={ImageScale}
            alt="Moon Sign"
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[450px] absolute top-0 left-0 rotate-animation"
          />
          <img
            src={ImageRotate}
            alt="Moon Sign"
            className="h-[180px] w-[180px] md:h-[270px] md:w-[270px] lg:h-[400px] lg:w-[400px] absolute top-0 left-0 mt-4 md:mt-5 lg:mt-7 ml-3 md:ml-4 lg:ml-5 counter-rotate-animation"
          />
          <img
            src={Image1}
            alt="Moon Inverse"
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[450px]"
          />
        </div>
        <div className="w-full md:w-[600px] lg:w-[700px] text-[16px] md:text-[18px] lg:text-[23px] mt-5 md:mt-0 md:ml-16 lg:ml-24 font-exo text-justify text-[#999898]">
          <p>
            VCET Hackathon is a 30-hour hackathon organized by the Department of Information Technology of <span className='text-[#d88a4c]'>"Vidyavardhini&apos;s College of Engineering and Technology".</span> By organizing this hackathon, we aim to promote a strong programming and product-building culture among students that will help them develop problem-solving, critical thinking, and software development skills. It is an opportunity to tackle challenging problems that affect us all and find solutions. Will you get time to eat? Can you ditch your sleep? Do you have a passion for building? Find out in this 30-hour long thrilling experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
