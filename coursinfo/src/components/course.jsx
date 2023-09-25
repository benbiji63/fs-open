// import { useState } from 'react';
import Content from './content.jsx';
import Header1 from './header1.jsx';
import Header3 from './header3.jsx';

const Course = ({ courses, heading }) => {
  return (
    <>
      <Header1 text={heading} />
        {courses.map(course => (
          <div key={course.id} >
            <Content parts={course.parts} />
            <Header3 text={`Total of exercises ${course.totalExercises}`} />
          </div>
        ))}
    </>
  );
};
export default Course;
