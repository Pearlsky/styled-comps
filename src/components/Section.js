import styled from "styled-components";

const StyledSection = styled.div`
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

const StyledWeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`;

const StyledWeekendTitle = styled(StyledWeekdayTitle)`
  border-color: yellow;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const WeekdayTitle = ({ day }) => {
  return day === "S" ? (
    <StyledWeekendTitle>{day}</StyledWeekendTitle>
  ) : (
    <StyledWeekdayTitle>{day}</StyledWeekdayTitle>
  );
};

export default Section;
export { WeekdayTitle };
