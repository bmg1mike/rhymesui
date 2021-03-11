import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import API from '../../axios';
import styled from 'styled-components/macro';


function ConfirmEmail() {

  const [confirming, setConfirming] = useState(true)
  const history = useHistory();

  const test = new URLSearchParams(useLocation().search);

  const [state, setstate] = useState({
    email: test.get("email"),
    token: test.get("token")
  })


    API.post('Account/ConfirmEmail', state)
      .then((res) => {
        setConfirming(false)
      })
      .catch((error) => {
        if(error) {
          console.log(error);
        }
      })

    function toLogin() {
      history.push("/account");
  }
  
  return (
    <div className='confirm'>
      {confirming
        ? <p>Loading</p> : 
        <ImageContainer>
            <TextContainer>
                <SignUpLogo src='../../images/logo.png' alt="RovinHeight Logo" />
                <h2>Email Confirmed</h2>
                <p>Your Email has been successfully verified</p>
                <br/>
                <p><b>Click below to Login</b></p>
                <LinkText>
                    <EmailLink  onClick={toLogin}>Login</EmailLink>
                </LinkText>
            </TextContainer>
        </ImageContainer>
      }
    </div>
  )
}

const ImageContainer = styled.div`
    background-image: url('../../images/background.png');
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 800px) {
        display: block;
    }
`;

const TextContainer = styled.div`
    padding: 4% 14%;
    background: #fff;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        position: absolute;
        top: 30%;
        text-align: center;
    }
`;

const SignUpLogo = styled.img``;

const LinkText = styled.p`
    color: #8e8e8e;
    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 12px;
        margin-bottom: 45px;
    }
`;

const EmailLink = styled.span`
    color: #e40000;
    cursor: pointer;
    font-weight: bold;
`;

export default ConfirmEmail