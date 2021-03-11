import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface TitleProps {
    text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
    return (
        <Text>{text}</Text>
    )
}

const Text = styled.h1`
    color: #e30000;
    font-size: 50px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 20px;

    @media (max-width: 800px) {
        font-size: 20px;
        font-weight: 400;
        margin-top: 26px;
    }
`;

export default Title
