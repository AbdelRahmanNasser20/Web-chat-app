import {register, login} from '../api';  // Adjust the path to where your api.js is located.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate(); // Call useNavigate at the top level

    const [username, setUsername] = useState('');   
    const [password, setPassword] = useState('');
    
    const [registerUsername, setRegisterUsername] = useState('');   
    const [registerPassword, setRegisterPassword] = useState('');
    
    const handleRegistration = async () => {
        try {
            console.log("Handle Registeration");
            const response = await register(registerUsername, registerPassword);
            if (response.success) {
                console.log("Successfully registered:", response.message);
                
            } else {
                console.error("Registration error:", response.message);
                // Handle error, like showing an error message to the user
            }
        } catch (error) {
            console.error("Failed to register:", error.message);
            // Handle error, like showing an error message to the user
        }
    };
    
    const handleLogin = async () => {
        try {
            console.log("Handle Login");
            const response = await login(username, password);
            if (response.success) {
                console.log("Successfully logged in:", response.message);
                navigate('/chat');
            } else {
                console.error("Login error:", response.message);
                // Handle error, like showing an error message to the user
            }
        } catch (error) {
            console.error("Failed to login:", error.message);
            // Handle error, like showing an error message to the user
        }
    };
      
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='username' id='username' type='username' onChange={(e) => setUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='password' id='password' type='password' onChange={(e) => setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={() => handleLogin()}> Sign in  </MDBBtn>
          <MDBBtn className="mb-4 w-100" onClick={() => login(username,password)}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>


        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
          
          <MDBInput wrapperClass='mb-4' label='Username' id='registerUsername' type='username' onChange={(e) => setRegisterUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='registerPassword' type='password' onChange={(e) => setRegisterPassword(e.target.value)}/>

          {/* <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/> */}

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={() => handleRegistration()} >Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;
