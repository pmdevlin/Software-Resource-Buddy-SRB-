import React from "react";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import {FaReact, FaHtml5, FaPython, FaNode} from 'react-icons/fa'
import {SiDeno} from 'react-icons/si'

export default function Navbar (){
    return (
        <nav className="nav-main">
            <div className="nav-logos">
                <DiJavascript1 size={50}/>
                <FaReact size={50}/>
                <FaHtml5 size={50}/>
                <DiCss3 size={50}/>
                <FaNode size={50}/>
                <FaPython size={50}/>
                < SiDeno size={50}/>                
            </div>
            <h1 className="nav-title">My Resource Page</h1>


        </nav>
        
    )
}