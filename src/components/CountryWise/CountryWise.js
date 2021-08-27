import React from 'react';
import { useState, useEffect } from 'react';
import "./CountryWise.css";
import Template from '../Template/Template';
import { Typography } from '@material-ui/core';
const CountryWise = (props) => {
    const [cases, setCases] = useState("");
    const [tcases, settCases] = useState("");
    const [deaths, setDeaths] = useState("");
    const [tdeaths, settDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    const [trecovered, settRecovered] = useState("");
    const [active,setActive]=useState("");
    const [update,setUpdate]=useState("");
    useEffect(async () => {
        const url = "https://disease.sh/v3/covid-19/countries/" + props.country;
        const res = await fetch(url);
        const data = await res.json();
        settCases(data.todayCases);
        setCases(data.cases);
        setDeaths(data.deaths);
        settDeaths(data.todayDeaths);
        setRecovered(data.recovered);
        settRecovered(data.todayRecovered);
        setActive(data.active);
        setUpdate(data.updated);

    }, [props.country]);
    return (
        <>
        <div className="active">
        <h3 >Active Cases : {active} </h3>
        </div>
        <div className="main-box">
            
    <ul>
         <li>  <Template heading="Cases" value={cases} /> </li>
          <li> <Template heading="Recovered" value={recovered} /> </li>
           <li><Template heading="Deaths" value={deaths}/> </li> 
           <li>  <Template heading="Cases-today" value={tcases} /> </li>
          <li> <Template heading="Recovered-today" value={trecovered} /> </li>
           <li><Template heading="Deaths-today"value={tdeaths} /> </li> 
            </ul>
        </div>
        </>
    )
}

export default CountryWise;