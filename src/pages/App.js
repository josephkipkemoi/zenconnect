import { useEffect, useState } from 'react';
import './App.css';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import KycComponent from '../components/KycComponent';
import {LandingMessageComponent, LandingSupportComponent} from '../components/landingMessage';
import ChatBoxComponent from '../components/chatBoxComponent';
import ChatBox from '../components/chatBox';

function App() {
  let [checkTime, setCheckTime] = useState(false)

  const checkTimeFunc = () => {
      const timer = setTimeout(() => {
        setCheckTime(true)
      }, 6000)
   
     return () => clearTimeout(timer)
  }

  useEffect(() => {
    checkTimeFunc()
  }, [checkTime])

  return (
    <div>
        <HeaderComponent/>
        <KycComponent checkTime={checkTime}/>
        <ChatBox/>
        <hr className='mt-5 mb-5'/>
        <div className='m-4'>
          <LandingSupportComponent/>
        </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
