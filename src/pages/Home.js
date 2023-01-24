import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about"> 
      <h2> Hi, My Name is Ifeoluwa Adedigba </h2>
      <div className="prompt"> 
      <p> A full stack developer with a passion for leatrning and creating. </p>
      
      <LinkedInIcon/>
      <EmailIcon/>
      <GithubIcon/>
      
      </div>
      </div>
      <div clasName="skills"> </div>
      <h1>Skills</h1>
      <ol classNmae="list">
        <li className="item">
        <h2> Front-End</h2>
        <span>
          HTML, CSS, React, Angular, ReactJS, NPM, BootStrap, Yarn, StyledComponents
        </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            .NET, MySql, NodeJS, MS SQL
          </span>
        </li>
        <li  lassNmae="item">

        <h2>Languages</h2>
          <span> C#, C, TypeScript, JavaScript, Java</span>
        </li>
      </ol>
    </div>
  )
}

export default Home