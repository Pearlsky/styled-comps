import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({primary}) => primary ? 'red' : 'yellow'};
  border: none;
  padding: 1em 0.2em;
  margin: 0.5em 0.2em;
`;

const Button = ( {primary, text} ) => {
  return <StyledButton primary={primary}> {text} </StyledButton>;
};

// note: props passed with just their names have a value of true

export default Button;
