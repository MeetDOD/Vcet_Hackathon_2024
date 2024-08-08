import Image1 from '../assets/moon-inverse1.png';
import ImageRotate from '../assets/moon-sign-3-450x450.png';
import ImageScale from '../assets/moon-sign-1-1.png';
// import BgMoon from '../assets/moon1.png'

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* <img src={BgMoon} /> */}
      <div className='flex justify-center'>
        <p className="text-[60px] font-orbitron font-bold mt-5 text-[#d88a4c]">About Us</p>
      </div>
      <div className='flex items-center mt-10'>
        <div className="relative ml-[230px]">
          <img src={ImageScale} alt="Moon Sign" className="h-[450px] w-[450px] absolute top-0 left-0 rotate-animation" />
          <img src={ImageRotate} alt="Moon Sign" className="h-[400px] w-[400px] absolute top-0 left-0 mt-7 ml-5 counter-rotate-animation" />
          <img src={Image1} alt="Moon Inverse" className="h-[450px] w-[450px]" />
        </div>
        <div className='w-[700px] text-[23px] ml-24 font-exo text-justify text-[#999898]'>
          <p>
            VCET Hackathon is a 30-hour hackathon organized by the Department of Information Technology of <span className='text-[#d88a4c]'>"Vidyavardhini&apos;s College of Engineering and Technology".</span> By organizing this hackathon, we aim to promote a strong programming and product-building culture among students that will help them develop problem-solving, critical thinking, and software development skills. It is an opportunity to tackle challenging problems that affect us all and find solutions. Will you get time to eat? Can you ditch your sleep? Do you have a passion for building? Find out in this 30-hour long thrilling experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
