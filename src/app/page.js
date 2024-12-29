'use client';
import React from "react";
import {
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.jsx";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch";
import Leadership from "./components/home/Leadership";
import Experience from "./components/home/Experience";
import '@fortawesome/fontawesome-free/css/all.min.css';

//import { NavBar } from "react-bootstrap";

const App = () => {
  return (
    <>
      <NavBar />
      <div id="home">
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
        />
      </div>
      {about.show && (
        <div id="about">
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        </div>
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && (
        <div id="projects">
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        </div>
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <div id="skills">
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        </div>
      )}
      <Footer>
        {getInTouch.show && (
          <div id="contact">
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          </div>
        )}
      </Footer>
    </>
  );
};

export default App;
