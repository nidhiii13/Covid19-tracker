import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./statewise.css";
const Statewise = () => {
    const [dataa,setData]=useState([]);
    useEffect(async() => {
      const res = await fetch('https://data.covid19india.org/data.json');
      const data= await res.json();
      setData(data.statewise);
    }, [])
    return (
        <>
        <div className="center">
        <div class="table-wrapper">
    <table class="fl-table">
        <thead>
                <tr>
                    <th>State</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    </tr>
                    </thead>
        <tbody>
                   { dataa.map((index)=>(
                    <tr>
                    <td>{index.state}</td>
                     <td>{index.active}</td>
                     <td>{index.confirmed}</td>
                     <td>{index.deaths}</td>
                     </tr>
                    ))
                }
                
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}

export default Statewise;
