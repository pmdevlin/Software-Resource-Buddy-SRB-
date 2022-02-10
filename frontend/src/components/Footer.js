import React from "react";
import FooterUpdate from './FooterUpdate'

export default function Footer(props){
    //console.log(props)
    return(
        <footer>
        <div className="footer">
           <div className="footer-card">
               <h3 className="footer-titles">About Page </h3>
               <p className="footer-para">Welcome to My Resource page. This page is meant to be used as place for me to store
                   my study material all in one place. I have found all information helpful on my journey to 
                   becoming a software engineer. I will continue to add recourses and functionality as the site 
                   grows. Thank you for stopping by I hope you find something useful. 
               </p>
            </div>

            <div className="footer-card">
                <h3 className="footer-titles">Add your own resource</h3>
                <FooterUpdate submitPost={props.submitPost}/>
                
            </div>

            <div className="footer-card">
                <h3 className="footer-titles">Author Bio </h3>
                <p className="footer-para"> My name is Paul Devlin. I am a software engineer working to learn as much as I can about utilizing and 
                    writing and creating awesome applications that can be multi-dimensional, and have a great user experience
                    I have been interested in coding sense I was in college in 2014. I didn't start really coding until 2021.
                    This project was created because of that learning experience. 

                </p>
            </div>
            
        </div>
        <div className="trademark"><h4> @ 2022 Devlin LLC</h4></div>
        </footer>
    )
        
}