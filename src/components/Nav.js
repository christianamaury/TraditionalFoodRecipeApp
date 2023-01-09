import React, {Component} from "react";
import {PrivacyPolicy} from "./PrivacyPolicy";
import reference1 from '../Images/reference1.jpg';
import '../App.css';

import { Link } from "react-router-dom";


export class Nav extends Component{
  render(){
    return(
      <nav className="nav">
        <img className="reference1Image" src={reference1} alt="reference1"/>
      <h3 id='heading3'> It's Yummtime </h3>
          <ul className="nav-links">
            <Link to="/">
              <li id='heading4'>  Home </li>
            </Link>
            <Link to='/privacy'>
              <li id='heading4'> Privacy Agreement </li>
            </Link>
        </ul>
      </nav>
    )
  }
}
