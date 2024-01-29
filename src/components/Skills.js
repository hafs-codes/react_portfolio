import React from 'react'
import php from '../images/php.jpg';
import java from '../images/java.png';
import mysql from '../images/mysql.png';
import python from '../images/python.png';
import laravel from '../images/laravel.png';
import htmlcss from '../images/htmlcss.png';
import javascript from '../images/javascript.png';

export default function Skills() {
  return (
<section id="Languages">
 
  <h1 className="language-header">Skills</h1>
  <div className="LanguagesFlex">
  <div className="Item">
    <img src={php}alt="Framework" />
  </div>
  <div className="Item">
    <img src={java} alt="Framework"/>
  </div>
  <div className="Item">
    <img src={mysql} alt="Framework"/>
  </div>
  <div className="Item">
    <img src={python} alt="Framework"/>
  </div>
  <div className="Item">
    <img src={laravel} alt="Framework"/>
  </div>
  <div className="Item">
    <img src={htmlcss} alt="Framework"/>
  </div>
  <div className="Item">
    <img src={javascript} alt="Framework"/>
  </div>
  </div>
</section>
  )
}
