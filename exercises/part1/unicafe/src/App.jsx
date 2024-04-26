import { useState } from "react";

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h1>Statistics:</h1>
      {total == 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticsLine text={"Good"} value={good} />
          <StatisticsLine text={"Neutral"} value={neutral} />
          <StatisticsLine text={"Bad"} value={bad} />
          <StatisticsLine text={"All"} value={total} />
          <StatisticsLine
            text={"Average"}
            value={total == 0 ? 0 : (good * 1 + bad * -1) / total}
          />
          <StatisticsLine
            text={"Positive"}
            value={good == 0 ? 0 : (Number(good) / Number(total)) * 100 + "%"}
          />
        </>
      )}
    </>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>Feedback:</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          setTotal(total + 1);
        }}
      >
        Good
      </button>
      <br />
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setTotal(total + 1);
        }}
      >
        Neutral
      </button>
      <br />
      <button
        onClick={() => {
          setBad(bad + 1);
          setTotal(total + 1);
        }}
      >
        Bad
      </button>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
