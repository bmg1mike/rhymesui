import React, { useMemo, useState, useEffect } from "react";
import styled from 'styled-components/macro'
import { Table } from './table1.jsx'
// import axios from 'axios'
import { COLUMNS } from "./columns";
import { Profile } from "../profile/Profile";
// import Pagination from "./Pagination.jsx"
import API from '../../axios'
import jwtDecode from 'jwt-decode'


export const PageLayout = () => {
  const token = localStorage.getItem('token');
    const columns:any = useMemo(() => COLUMNS, [])
  const [data, setData]:any = useState([]);
  const [fullName, setFullName] = useState('')
 
  useEffect(() => {
 if (token) {
            const decoded: any = jwtDecode(token);
            setFullName(decoded.unique_name.split(" ")[0])
      }
      API.get(`/Book/GetAllBooks`)
      .then((res) => {
          setData(res.data)
      })
      .catch((error) => {
          console.log({error});
          if(error) {
              alert(error)
          }
      })
    }, [token])
    
    return (
        <PageLayoutStyle>
          <div className="container">
            <Profile fullName={fullName}/>
            <div className="pageContent">
            <Table columns={columns} data={data} />
            {/* {data ? <Table columns={columns} data={data} /> : <p>No data</p>}           */}

          </div>
          </div>
        </PageLayoutStyle>
    )
}

const PageLayoutStyle = styled.div`
  flex: 84%;
  height: 100%;
  padding: 3rem 3.5rem;
  
  .container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .pageContent{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    min-height: 90%;
  }

`


