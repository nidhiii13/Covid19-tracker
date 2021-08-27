import React from 'react';
import { TextField } from '@material-ui/core';
import "./searchBar.css";
import { Button } from '@material-ui/core';
import CountryWise from '../CountryWise/CountryWise';
import { useState } from 'react';
const Searchbar = () => {
    const [country,setCountry]=useState("");
    const [text,setText]=useState("");
    const [condition,setCondition]=useState(false);
    const [final,setFinal]=useState(false);
    const [cases,setCases]=useState("");
    const [deaths,setDeaths]=useState("");
            const store=async()=>{
            setCountry(text);
          setCondition(true);
          /*const url="https://disease.sh/v3/covid-19/countries/"+country;
          const res=await fetch(url);
          const data= await res.json();
            setCases(data.cases);
            setDeaths(data.deaths);
            setFinal(true);*/
        }    
       
    
    
    return (
        <>
            <div className="search">
                <TextField id="filled-basic" placeholder="Country" variant="filled" onChange={(e)=>{setText(e.target.value);}}/>
                <Button id="searchb" variant="contained" color="secondary" onClick={store} >
                    go
                </Button>
            </div>
            <div className="country">
                {condition  && <CountryWise country={country}/>}
            </div>
        </>
    )
}

export default Searchbar;
