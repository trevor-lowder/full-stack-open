const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <p key={part.name}>
        {part.name} - {part.exercises}
      </p>
    ))}
  </>
);

const Total = ({ total }) => {
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce((acc, part) => acc + part.exercises, 0)}
      />
    </>
  );
};

export default App;
