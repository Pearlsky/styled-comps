import styled from "styled-components";
import Section, { WeekdayTitle } from "./components/Section";

const Title = styled.h1`
  color: orange;
`;

const App = () => {
  return (
    <div>
      <Title>Progress Tracker</Title>
      <Section>
        <WeekdayTitle day="M"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="T"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="W"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="T"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="F"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="S"></WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle day="S"></WeekdayTitle>
      </Section>
    </div>
  );
};

export default App;
