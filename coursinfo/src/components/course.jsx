// import { useState } from 'react';
import Header1 from './header1.jsx'
import Para from './para.jsx'

const Course = ({ course }) => (
  <>
  <Header1 text={course.name}/>
  {course.parts.map(part=><Para text={`${part.name} ${part.exercises}`} key={part.id}/>)}
  </>
  )
export default  Course;
