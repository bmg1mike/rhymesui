import React, { FC } from 'react'
import styled from 'styled-components/macro';

interface UserInputProps {
    icon: string;
    placeholder: string;
    type: string;
    alt: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UserInput: FC<UserInputProps> = ({ icon, placeholder, type, alt, value, onChange }) => {
    return (
        <UserInputContainer>
            <div>
                <IconImage src={icon} alt={alt} />
            </div>
            <Input onChange={onChange} value={value} type={type} placeholder={placeholder} />
        </UserInputContainer>
    )
}

const UserInputContainer = styled.div`
    display: flex;
    padding: 8px 10px 8px 24px;
    background: #e6e6e6;
    border-bottom: 2px solid grey;
    width: 50%;
    margin-bottom: 20px;

    @media (max-width: 800px) {
        padding: 8px 8px 8px 16px;
        width: 70%;
    }
`;

const IconImage = styled.img`
    @media (max-width: 800px) {
        width: 12px;
    }
`;

const Input = styled.input`
    margin-left: 20px;
    border: none;
    background: transparent;
    width: 100%;
    outline: none;

    &::placeholder {
        color: #e40000;
        opacity: .4;
    }

    @media (max-width: 800px) {
        margin-left: 16px;
    }
`;

export default UserInput
