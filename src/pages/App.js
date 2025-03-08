import { useEffect, useState } from 'react';
import './App.css';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import KycComponent from '../components/KycComponent';
import LandingSupportComponent  from '../components/landingMessage';
import ChatBox from '../components/chatBox';

function App() {
  let [checkTime, setCheckTime] = useState(false)

  const checkTimeFunc = () => {
      const timer = setTimeout(() => {
        setCheckTime(true)
      }, 2000)
   
     return () => clearTimeout(timer)
  }

  useEffect(() => {
    checkTimeFunc()
  }, [checkTime])

  return (
    <>
        <HeaderComponent/>
        <KycComponent checkTime={checkTime}/>
        <ChatBox/>
        <LandingSupportComponent/>
        <FooterComponent/>
    </>
  );
}

export default App;
