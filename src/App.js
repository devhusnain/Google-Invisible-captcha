import './App.css';
import GoogleRecaptchaComponent from './GoogleRecaptchaComponent';
 
import {
  GoogleReCaptchaProvider,
  
} from 'react-google-recaptcha-v3';
 
function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6LcA_3siAAAAAKBvnc9NRuHr3SDicVhOfTlmr2O1">
        <GoogleRecaptchaComponent />
      </GoogleReCaptchaProvider>
    </div>
  );
}
 
export default App;