import './App.css';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import {LandingMessageComponent, LandingSupportComponent} from './components/landingMessage';

function App() {
  return (
    <div>
        <HeaderComponent/>
        <LandingMessageComponent/>
        <LandingSupportComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;
