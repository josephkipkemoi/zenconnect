import './App.css';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import KycComponent from './components/KycComponent';
import {LandingMessageComponent, LandingSupportComponent} from './components/landingMessage';

function App() {
  return (
    <div>
        <HeaderComponent/>
        <KycComponent/>
        <LandingMessageComponent/>
        <LandingSupportComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;
