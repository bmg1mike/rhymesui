import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import API from '../../axios';
import Button from '../reusables/Button';
import Title from '../reusables/Title';
import UserInput from '../reusables/UserInput';
import dotenv from 'dotenv';
dotenv.config();

function ForgotPassword() {

    const { push } = useHistory()
    const [errorMessage, setErrorMessage] = useState('')
    const [state, setstate] = useState({
        email: ""
    })

    const isInvalid = state.email === '';

    const updateState = (key: string, value: string) => {
        setstate({
            ...state,
            [key]: value,
        })
    }

    const changePassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        API.post('Account/ForgotPassword', state)
            .then((res) => {
                push('/emailconfirm')
            })
            .catch((error) => {
                console.log({error});
                setErrorMessage(error.response.data)
            })
    }

    return (
        <ImageContainer>
            <MobileHeader>
                <Logo src='../../images/logo.png' alt="RovinHeight Logo" />
            </MobileHeader>
            <SignUpContainer>
                <FormContainer>
                    <SignUpLogo src='../../images/logo.png' alt="RovinHeight Logo" />
                    <Title text="Forgot Password" />
                    <LoginFooter>Enter your email address <br/>and we'll send you a link to reset your password</LoginFooter>
                    <UserInput value={state.email} onChange={(e) => updateState('email', e.currentTarget.value)} icon="../../images/name.png" type="email" placeholder="Email Address" alt="Email Address" />
                    <Button isInvalid={isInvalid} text="Reset Password" onClick={changePassword} />
                    <ErrorMessage>{ errorMessage }</ErrorMessage>
                </FormContainer>
            </SignUpContainer>
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

const MobileHeader = styled.div`
    background-image: url('../../images/topbackground.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    background-color: #e40000;
    display: none;

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Logo = styled.img`
    filter: brightness(0) invert(1);
    margin-top: -40px;
`;

const SignUpContainer = styled.div`
    width: 50%;
    background: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 0;
    margin-left: 120px;

    @media (max-width: 800px) {
        width: 80%;
        height: fit-content;
        margin: 0 auto;
        background-image: none;
        padding-top: 0;
        margin-top: -60px;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        padding-top: 16px;
    }
`;

const SignUpLogo = styled.img`
    @media (max-width: 800px) {
        display: none;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 12px;
    padding: 20px;
`;

const LoginFooter = styled.p`
    color: #8e8e8e;
    cursor: pointer;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 10px;
    }
`;

export default ForgotPassword
