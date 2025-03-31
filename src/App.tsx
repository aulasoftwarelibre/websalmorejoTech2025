import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/HeaderPhone/Header';
import Footer from './components/Footer/Footer';
import Info from './components/InfoTest/Info';
import { SponsorProps } from './components/Sponsors';
import sponsors from './data/sponsors.json';
import { SponsorsGrid } from './components/Sponsors/grid';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [animationClass, setAnimationClass] = useState(''); // Add class to control page animation

  useEffect(() => {
    const timer = setTimeout(() => {
    //  setTimeout(() => {
        setLoading(false); // Hide loader after the slide-out animation is complete
    //  }, 1500); // This should match the duration of the slide-out animation
     // setAnimationClass('slide-out'); // Trigger slide-out animation for the entire page
    }, 1800); // Time before starting the slide-out animation

    return () => {clearTimeout(timer)}; 
  }, []);

  if (loading) {
    return (
      <div className={`appContainerLogo loader-container ${animationClass}`}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className={`appContainer`}>
        <Navbar />
        <Header />
      </div>
      <Info />
      <SponsorsGrid sponsors={sponsors as SponsorProps[]} />
      <Footer />
    </>
  );
}

export default App;
