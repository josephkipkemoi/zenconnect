import './App.css';
import HeaderComponent from './components/header';
import {LandingMessageComponent, LandingSupportComponent} from './components/landingMessage';

function App() {
  return (
    <div>
        <HeaderComponent/>
        <LandingMessageComponent/>
        <LandingSupportComponent/>
    </div>
  );
}

export default App;
