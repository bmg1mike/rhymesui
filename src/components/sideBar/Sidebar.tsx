import React from 'react';
import styled from 'styled-components/macro'
import navBarItems from './navBarData'
export const SideBar = () => {
    return (
        <SideBarStyle>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/RovingHeightslogo.png'}  alt="Roving Heights Logo"/>
            </div>
            <ul className="sideBarItems">
                {navBarItems.map((item, key) => {
                    return (
                        <li className="row"
                            key={key}
                            id={window.location.pathname === item.link ? "active" : " " }
                            onClick={() => { window.location.pathname = item.link }}>
                            <div className="icon">{item.icon}</div>
                            <div className="title">{item.title}</div>
                        </li>
                    )
                })}
            </ul>
            <div className="line">
                <hr/>
            </div>
        </SideBarStyle>
    )
}

const SideBarStyle = styled.div`
  flex: 16%;
  height: 100%;
  background-color: #fff;
  font-family: "Mukta", sans-serif;
  border-right: 3px solid #e40000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    height: 20%;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .logo img{
    height: 70%;
  }
  .sideBarItems {
    height: 60%;
  }
  
  .row {
    display: flex;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    color: #575757;
    transition: 0.3s;
  }
  .row:hover,
  #active {
    cursor: pointer;
    background-color: rgba(228, 0, 0, 0.1);
    color: #e40000;
    border-left: 2.5px solid #e40000;
  }
  
  .icon {
    flex: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    flex: 70%;
    display: flex;
    align-items: center;
  }
  
  .line {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  hr {
    width: 80%;
    border: 1px solid #e40000;
  }
`