import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 1em 0.2em;
  margin: 0.5em 0.2em;
`;

const Button = () => {
  return <StyledButton> Click Me </StyledButton>;
};

// note: props passed with just their names have a value of true

export default Button;
