import React from 'react';
import ImageSlider from './ImageSlider';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import fms from '../images/facultymanagementsystem.png';
import admin from '../images/admin.png';
import transaction from '../images/transaction.png';

const Projects = () => {
  const images = [fms, transaction, admin];

  return (
    <section id="Projects">
      <span id="project-mini-header">Accomplished works⚒️</span>
      <h2 className="project-header">Projects</h2>
      <div className="projectsContainer">
        <ImageSlider images={images} />
      </div>
      <LeftArrow />
      <RightArrow />
    </section>
  );
};

export default Projects;
