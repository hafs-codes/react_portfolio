import React from 'react'

function About() {
  return (
<>
<section class="mainFlex" id="about">
    <div class="flexContainer">
      <div class="flexItem">
        <h2>Hafsa Omar</h2>
        <p>A passionate <span id="pink">Software developer</span> from <span id="pink">Nairobi</span></p>
        <br/>
        <br/>
        <div id="arrow-container" onclick="scrollToProjects()">
          <span id="arrowImage"></span>
          <span class="arrow-content">
          </span>
          
        </div>
      </div>
      <div class="flexItem">
        <img src="assets/images/profile-pic.png" alt="Profile Picture" id="profile-img"/>
      </div>
    </div>
  </section>
</>
  )
}

export default About
