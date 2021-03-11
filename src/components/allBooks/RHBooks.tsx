import React from 'react';
import styled from 'styled-components/macro'
import {SideBar} from '../sideBar/Sidebar';
import {PageLayout} from './PageLAyout'
export const RHBooks = () => {
    return (
        <RHBooksStyle>
            <SideBar />
            <PageLayout />
        </RHBooksStyle>
    )
}

const RHBooksStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`
