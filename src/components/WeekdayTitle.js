import styled from "styled-components";

const StyledWeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`;

const WeekdayTitle = ({ day }) => {
  return <StyledWeekdayTitle>{day}</StyledWeekdayTitle>;
};

export default WeekdayTitle;