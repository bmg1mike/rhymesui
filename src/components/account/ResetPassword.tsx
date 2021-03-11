import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import API from '../../axios';
import Button from '../reusables/Button';
import Title from '../reusables/Title';
import UserInput from '../reusables/UserInput';
import dotenv from 'dotenv';
dotenv.config();

function ResetPassword() {
    const test = new URLSearchParams(useLocation().search);

    const { push } = useHistory()
    const [state, setstate] = useState({
        email: test.get("email"),
        token: test.get("token"),
        newPassword: "",
        confirmNewPassword: ""
    })
    console.log("State", state);

    const isInvalid = state.newPassword === '' || state.confirmNewPassword === '';

    const updateState = (key: string, value: string) => {
        setstate({
            ...state,
            [key]: value,
        })
    }

    const resetPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(state);
        API.post('Account/ResetPassword', state)
            .then((res) => {
                console.log({res});
                push('/account')
            })
            .catch((error) => {
                console.log({error});
                if(error) {
                    alert("Something went wrong")
                }
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
                    <Title text="Change Password" />
                    <LoginFooter>Enter your new password</LoginFooter>
                    <UserInput value={state.newPassword} onChange={(e) => updateState('newPassword', e.currentTarget.value)} icon="../../images/password.png" type="password" placeholder="New Password" alt="Password" />
                    <UserInput value={state.confirmNewPassword} onChange={(e) => updateState('confirmNewPassword', e.currentTarget.value)} icon="../../images/password.png" type="password" placeholder="Confirm New Password" alt="Password" />
                    <Button isInvalid={isInvalid} text="Confirm Password" onClick={resetPassword} />
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

const LoginFooter = styled.p`
    color: #8e8e8e;
    cursor: pointer;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 10px;
    }
`;

export default ResetPassword
