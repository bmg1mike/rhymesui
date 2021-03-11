import React from 'react'
import styled from 'styled-components/macro'
import { RiArrowDownSLine } from "react-icons/ri";


export const Profile = ({fullName}: any) => {
    return (
        <ProfileStyle>
                <div className="profile-pic">
                    <img src={process.env.PUBLIC_URL + '/images/Mask Group.png'} alt="Profile"/>
                </div>
                <div className="name">
                    <small className="greeting">Good afternoon,</small>
          <p className="username">{ fullName }</p>
                </div>
                <div className="dropdown">
                    <RiArrowDownSLine />
                </div>

        </ProfileStyle>
    )
}

const ProfileStyle = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  background-color: #EDEDED;
  width: 12rem;
  justify-content: space-between;
  border-radius: 50px;
  color: #A8A8A8;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.15);
  color: #3A3A3A;
}
.greeting{
  color: #A8A8A8;
}

.profile-pic{
  height: 100%;
  width: 30%;
}
.profile-pic img{
  /* width: 100%; */
  height: 100%;
}
.dropdown{
  margin: 0 .8rem;
}
`