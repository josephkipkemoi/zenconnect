import { useEffect, useState } from 'react';
import './App.css';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import KycComponent from './components/KycComponent';
import {LandingMessageComponent, LandingSupportComponent} from './components/landingMessage';

function App() {
  let [checkTime, setCheckTime] = useState(false)

  const checkTimeFunc = () => {
      const timer = setTimeout(() => {
        setCheckTime(true)
        console.log("timw")
      }, 3000)
   
     return () => clearTimeout(timer)
  }

  useEffect(() => {
    checkTimeFunc()
  }, [checkTime])

  return (
    <div>
        <HeaderComponent/>
        <KycComponent checkTime={checkTime}/>
        <LandingMessageComponent/>
        <LandingSupportComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;
