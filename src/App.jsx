import Home from './Pages/HomePage/Home';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroPage from './Pages/HeroPage/HeroPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Navbar from './components/NavbarPage/Navbar';
import Footer from './Pages/FooterPage/Footer';
import AboutSection from './SectionPages/AboutSection/AboutSection';
import EducationSection from './SectionPages/EducationSection/EducationSection';
import ProjectSection from './SectionPages/ProjectSection/ProjectSection';

import SkillSection from './SectionPages/SkillsSectionPage/SkillSection';
import ServiceSection from './SectionPages/ServiceSection/ServiceSection';
import ContactSection from './SectionPages/ContactSection/ContactSection';
import Page404 from './Pages/PageNotFound/Page404';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import InternshipPage from './Pages/InternshipsPage/InternshipPage';
import { useLocation } from "react-router-dom";
import EntryPage from './components/SplashScreen/EntryPage';

// import AnimationHomePage from './components/AnimationHomePage/AnimationHomePage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }, []);
  const location = useLocation();

  useEffect(() => {
    const hourIST = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      hour12: false,
    });

    const hour = parseInt(hourIST);
    const isDark = hour >= 19 || hour < 6;

    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  // Hide Navbar on Entry Page
  const hideNavbar = location.pathname === '/' || location.pathname === '/404pagenotfound';

  return (
    <div style={{overflow:'hidden'}}>
    {!hideNavbar && <Navbar />}
    <Routes>
      {/* <Route path='/' element={<AnimationHomePage />} /> */}
      <Route path='/' element={<EntryPage/>}/>
      <Route path='/home' element={<Home />} />
      <Route path='/heropage' element={<HeroPage/>}/>
      <Route path='/about' element={<AboutSection/>} />
      
      <Route path='/education' element={<EducationSection/>}/>
      <Route path='/projects' element={<ProjectSection/>} />
      <Route path="/internships" element={<InternshipPage/>}/>
      <Route path="/certificates" element={<SkillSection/>}/>
      <Route path="/services" element={<ServiceSection/>}/>
      <Route path='/contact' element={<ContactSection/>}/>
      <Route path='/404pagenotfound' element={<Page404/>}/>
    </Routes>
    {!hideNavbar && <Footer />}
    
    </div>
  );
}

export default App;