import React from 'react'
import styled from 'styled-components/macro'

interface FilterProps {
    filter: any,
    setFilter: any
}
export const GlobalFilter: React.FC<FilterProps> = ({filter, setFilter}) => {
    return (
        <SearchStyle>
            Search: {' '}
            <input value={ filter || ''}
            onChange={e => setFilter(e.target.value)}
            />
        </SearchStyle>
    )
}

const SearchStyle = styled.span`
  display: flex;
  width: 16rem;
  justify-content: space-between;
  color: #767676;
  height: 6%;
  outline: none;

  input{
    width: 75%;
    height: 100%;
    border: 2px solid #9A9A9A;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding: 0 .5rem;
    transition: all .50s;
  }
  input:focus {
    outline: none !important;
    border:1px solid #e40000;
    box-shadow: 1px 3px 3px rgba(228, 0, 0, 0.1);
  }

  
`