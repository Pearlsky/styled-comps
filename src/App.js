import styled from "styled-components";
import WeekdayTitle from "./components/WeekdayTitle";

const Title = styled.h1`
  color: orange;
`;

const Section = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

const App = () => {
  return (
    <div>
      <Title>Progress Tracker</Title>
      <Section>
        <WeekdayTitle day={"M"}></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day={"T"}></WeekdayTitle>
      </Section><Section>
        <WeekdayTitle day={"W"}></WeekdayTitle>
      </Section><Section>
        <WeekdayTitle day={"T"}></WeekdayTitle>
      </Section><Section>
        <WeekdayTitle day={"F"}></WeekdayTitle>
      </Section><Section>
        <WeekdayTitle day={"S"}></WeekdayTitle>
      </Section><Section>
        <WeekdayTitle day={"S"}></WeekdayTitle>
      </Section>
    </div>
  );
};

export default App;
