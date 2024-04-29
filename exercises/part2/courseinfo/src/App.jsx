/* eslint-disable react/prop-types */
import Course from "./components/Course";

export const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

export const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <p key={part.id}>
        {part.name} - {part.exercises}
      </p>
    ))}
  </>
);

export const Total = ({ total }) => {
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return <Course courses={courses} />;
};

export default App;
