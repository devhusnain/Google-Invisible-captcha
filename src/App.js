import './App.css';
import GoogleRecaptchaComponent from './GoogleRecaptchaComponent';
 
import {
  GoogleReCaptchaProvider,
  
} from 'react-google-recaptcha-v3';
 
function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="_Private_site_key_">
        <GoogleRecaptchaComponent />
      </GoogleReCaptchaProvider>
    </div>
  );
}
 
export default App;
