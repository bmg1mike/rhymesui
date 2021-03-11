import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface ButtonProps {
    text: string;
    isInvalid: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({ text, isInvalid, onClick }) => {
    return (
        <ButtonContainer disabled={isInvalid} onClick={onClick}>{text}</ButtonContainer>
    );
}

const ButtonContainer = styled.button`
    background: #e40000;
    font-size: 24px;
    color: #fff;
    padding: 14px 0;
    text-align: center;
    width: 54%;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: .4s ease-in-out;

    &:hover {
        background: darkred;
    }

    &:disabled {
        opacity: 0.5;
        cursor: auto;
    }

    @media (max-width: 800px) {
        font-size: 16px;
        padding: 10px 0;
        width: 78%;
    }
`;

export default Button;