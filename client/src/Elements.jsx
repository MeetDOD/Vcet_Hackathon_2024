import './style.css'
import Header from "./Components/Navbar/Header"
import Hero from "./Components/Hero/Hero"
import Sponsors from "./Components/Sponsors/Sponsors";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Faq from "./Components/FAQ/Faq";
import Footer from './Components/Footer/Footer'
import Timer from './Components/Timer/Timer'
import Guidelines from "./Components/Guidelines/Guidelines";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery"
import Prize from "./Components/Prizes/Prize";
import Prize2 from "./Components/Prizes/Prize2";
import Problem from "./Components/ProblemCards/Problem";
import OldSponder from "./Components/OldSponser/OldSponder";
import BackToTopButton from './BackToTop/BackToTop';

const Elements = () => {

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Hero />
        <BackToTopButton />
        <About />
        <Timer />
        <Problem />
        <Prize />
        <Prize2 />
        <Sponsors />
        <OldSponder />
        <Timeline />
        <Guidelines />
        <Gallery />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Elements