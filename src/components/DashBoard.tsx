import React, { useEffect, useState } from 'react'
import API from '../axios'
import jwtDecode from 'jwt-decode'
import Item from './Item';

function DashBoard() {
    const token = localStorage.getItem('token');
    const [fullName, setFullName] = useState('')
    const [bookDetails, setBookDetails] = useState<any[]>([])

    useEffect(() => {
        if (token) {
            const decoded: any = jwtDecode(token);
            setFullName(decoded.unique_name)
        }
    }, [token])

    API.get('/Book/GetAllBooks')
            .then((res) => {
                setBookDetails(res.data)
            })
            .catch((error) => {
                console.log({error});
            })

    const logout = () => {
        localStorage.clear()
        window.location.href = "/account"
    }
    

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{fullName}</p>
            <div>
                <b>Title</b>
                {bookDetails.map((item) => 
                    <Item 
                        key={item.bookId}
                        name={item.title}
                    />
                )}
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default DashBoard
