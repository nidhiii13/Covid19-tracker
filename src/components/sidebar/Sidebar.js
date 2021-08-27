import { Link } from 'react-router-dom';
import React from 'react'
import "./sidebar.css";
const Sidebar = () => {
    return (
        <>
         <div class="sidenav">
  <Link to="/countrywise">Countrywise</Link>
  <Link to="/statewise">India statewise</Link>
  <a href="https://www.cowin.gov.in/">Cowin portal</a>
</div>   
        </>
    )
}

export default Sidebar;
