import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import API from '../../axios';
import Button from '../reusables/Button';
import Title from '../reusables/Title';
import UserInput from '../reusables/UserInput';
import { AuthContext } from '../../context/authContext' 
import dotenv from 'dotenv';
dotenv.config();

function Login() {
    const { setAuthState } = useContext(AuthContext);
    const { push } = useHistory()
    const [errorMessage, setErrorMessage] = useState('')
    const [state, setstate] = useState({
        email: "",
        password: "",
    })

    const isInvalid = state.email === '' || state.password === '';

    const history = useHistory();

    function toForgotPassword() {
        history.push("/account/forgotpassword");
    }

    const updateState = (key: string, value: string) => {
        setstate({
            ...state,
            [key]: value,
        })
    }

    function toSignUp() {
        history.push("/account/signup");
    }

    const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        API.post('Account/Login', state)
            .then((res) => {
                const output = res?.data?.split('=> ');
                setAuthState(output[1])
                push('/rh-books')
            })
            .catch((error) => {
                if(error) {
                    setErrorMessage(error.response.data)
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
                    <Title text="Login" />
                    <UserInput value={state.email} onChange={(e) => updateState('email', e.currentTarget.value)} icon="../../images/name.png" type="email" placeholder="Email Address" alt="Email Address" />
                    <UserInput value={state.password} onChange={(e) => updateState('password', e.currentTarget.value)} icon="../../images/password.png" type="password" placeholder="Password" alt="Password" />
                    <Button isInvalid={isInvalid} text="Login" onClick={login} />
                    <ErrorMessage>{ errorMessage }</ErrorMessage>
                    <LoginFooter>
                        Don't have an account yet? <LoginLink  onClick={toSignUp}>Sign Up</LoginLink>
                    </LoginFooter>
                    <LoginFooter onClick={toForgotPassword}>
                        Forgot Password
                    </LoginFooter>
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

    @media (max-width: 800px) {
        font-size: 12px;
        margin-bottom: 45px;
    }
`;

const LoginLink = styled.span`
    color: #e40000;
    cursor: pointer;
    font-weight: bold;
`;

export default Login
