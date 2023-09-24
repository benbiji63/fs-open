// import { useState } from 'react';
import Content from './content.jsx';
import Header1 from './header1.jsx';
import Header3 from './header3.jsx';


const Course = ({ course }) => {
return(  <>
    <Header1 text={course.name} />
    <Content parts={course.parts} />
    <Header3 text ={`Total of exercises ${course.totalExercises}`}/>
  </>
)}
;
export default Course;
