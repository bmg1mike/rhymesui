import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

function EmailConfirm() {

    const history = useHistory();

    function toForgotPassword() {
        history.push("/account/forgotpassword");
    }

    return (
        <ImageContainer>
            <TextContainer>
                <SignUpLogo src='../../images/logo.png' alt="RovinHeight Logo" />
                <h2>Check your Email</h2>
                <p>We've sent a message to your Email with a link to change your password</p>
                <p><b>Didn't get the Email?</b></p>
                <LinkText>
                    <EmailLink  onClick={toForgotPassword}>Re-enter your email and try again</EmailLink>
                </LinkText>
            </TextContainer>
        </ImageContainer>
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

export default EmailConfirm
