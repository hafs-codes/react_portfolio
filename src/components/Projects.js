import React from 'react'

function Projects() {
    return (
        <>
            <section id="Projects">
                <span id="project-mini-header">Accomplished works⚒️</span>
                <h2 class="project-header">Projects</h2>
                <div class="projectsContainer">
                    <div class="ProjectsFlex">
                        <div class="projectItem">
                            <img src="assets/images/facultymanagementsystem.png" alt="Framework"/>
                        </div>
                        <div class="projectItem">
                            <img src="assets/images/admin.png" alt="Framework"/>
                        </div>
                        <div class="projectItem">
                            <img src="assets/images/transaction.png" alt="Framework"/>
                        </div>
                    </div>
                </div>
                <div class="arrow" id="left-arrow">&#9664;</div>
                <div class="arrow" id="right-arrow">&#9654;</div>
            </section>
        </>
    )
}

export default Projects
