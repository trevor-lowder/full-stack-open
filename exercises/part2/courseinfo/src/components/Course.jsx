/* eslint-disable react/prop-types */
import { Header, Content, Total } from "../App";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total
            total={course.parts.reduce((acc, part) => acc + part.exercises, 0)}
          />
        </>
      ))}
    </>
  );
};

export default Course;
