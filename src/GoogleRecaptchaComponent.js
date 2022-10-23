import React, { useCallback, useEffect, useState } from "react";



import {

    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
 
const GoogleRecaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [token, setToken] = useState('');
    const [actionToChange, setActionToChange] = useState('');
 
    const registerUser = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        const result = await executeRecaptcha('register');
        setToken(result);
        verifyTokenAndCallAPi(result);
    }, [executeRecaptcha]);
 
    const handleTextChange = useCallback(event => {
        setActionToChange(event.target.value);
    }, []);
 
    useEffect(() => {
        if (!executeRecaptcha) {
            return;
        }
        const handleReCaptchaVerify = async () => {
            const token = await executeRecaptcha('register');
            setToken(token);
           
        };
        handleReCaptchaVerify();
    }, [executeRecaptcha]);

    let verifyTokenAndCallAPi = async (token) => {
        
        let response = () => {
            return new Promise(function(resolve, reject) {
              fetch(`https://www.google.com/recaptcha/api/siteverify`, {
                params: {
                secret: "_Site_Secrect",
                response: token
                }
  
              }).then(response => {
                resolve(response);
              });
            });
          };
          let res= await response();
        
        // Extract result from the API response
        if (res.success){
        console.log('Valid');
        } else {
        console.log('Invalid');
}
    }
    return (
        <div>
            <div className="row d-flex justify-content-center text-center">
                <h1>React Google Recaptcha V3</h1>
                <hr />
                
                    <form>
                        
                            <label>First Name</label>
                            <input type="text" placeholder="First name" onChange={handleTextChange} value={actionToChange} />
                     
 
                        
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" />
                        
                        <button variant="primary" type="button" onClick={registerUser}>
                            Submit
                        </button>
                    </form>
               
            </div>
            {token && <p>Token: {token}</p>}
        </div>
    );
}
export default GoogleRecaptchaComponent;
