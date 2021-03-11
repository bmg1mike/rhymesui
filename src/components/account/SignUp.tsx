import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { AuthContext } from '../../context/authContext' 
import API from '../../axios';
import Button from '../reusables/Button';
import Title from '../reusables/Title';
import UserInput from '../reusables/UserInput';

function SignUp() {
    const { setAuthState } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const { push } = useHistory()
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })

    const isInvalid = state.firstName === '' || state.lastName === '' || state.email === '' || state.phoneNumber === '' || state.password === '' || state.confirmPassword === '';


    const updateState = (key: string, value: string) => {
        setstate({
            ...state,
            [key]: value,
        })
    }

    const history = useHistory();

    function toLogin() {
        history.push("/account");
    }

    const register = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(state);
        API.post('Account/Register', state)
            .then((res) => {
                const output = res?.data?.token
                setAuthState(output)
                push('/rh-books')
            })
            .catch((error) => {
                console.log({error});
                if(error) {
                    setErrorMessage(error.message)
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
                    <Title text="Sign Up Form" />
                    <UserInput value={state.firstName} onChange={(e) => updateState('firstName', e.currentTarget.value)} icon="../../images/name.png" type="text" placeholder="First Name" alt="First Name" />
                    <UserInput value={state.lastName} onChange={(e) => updateState('lastName', e.currentTarget.value)} icon="../../images/name.png" type="text" placeholder="Last Name" alt="Last Name" />
                    <UserInput value={state.email} onChange={(e) => updateState('email', e.currentTarget.value)} icon="../../images/name.png" type="email" placeholder="Email Address" alt="Email Address" />
                    <UserInput value={state.phoneNumber} onChange={(e) => updateState('phoneNumber', e.currentTarget.value)} icon="../../images/password.png" type="number" placeholder="Phone Number" alt="Phone Number" />
                    <UserInput value={state.password} onChange={(e) => updateState('password', e.currentTarget.value)} icon="../../images/password.png" type="password" placeholder="Password" alt="Password" />
                    <UserInput value={state.confirmPassword} onChange={(e) => updateState('confirmPassword', e.currentTarget.value)} icon="../../images/password.png" type="password" placeholder="Confirm Password" alt="Confirm Password" />
                    <Button isInvalid={isInvalid} text="Sign Up" onClick={register} />
                    <ErrorMessage>{ errorMessage }</ErrorMessage>
                    <LoginFooter>
                        Have an account? <LoginLink  onClick={toLogin}>Login here</LoginLink>
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
    width: 60%;
    height: 100vh;
    background: #fff;
    background-image: url('../../images/topbackground.png');
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 800px) {
        width: 80%;
        height: fit-content;
        margin: 0 auto;
        background-image: none;
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

    @media (max-width: 800px) {
        font-size: 12px;
        margin-bottom: 45px;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 12px;
    padding: 20px;
`;

const LoginLink = styled.span`
    color: #e40000;
    cursor: pointer;
    font-weight: bold;
`;

export default SignUp
