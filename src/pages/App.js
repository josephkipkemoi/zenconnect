import { useEffect, useState } from 'react';
import './App.css';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import KycComponent from '../components/KycComponent';
import {LandingMessageComponent, LandingSupportComponent} from '../components/landingMessage';
import ChatBoxComponent from '../components/chatBoxComponent';

function App() {
  let [checkTime, setCheckTime] = useState(false)

  const checkTimeFunc = () => {
      const timer = setTimeout(() => {
        setCheckTime(true)
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
        <div className="bg-warning p-3 d-flex flex-column align-items-center container rounded-5">
          <ChatBoxComponent/>
          <LandingMessageComponent/>
        </div>
        <div className='m-4'>
          <LandingSupportComponent/>
        </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
