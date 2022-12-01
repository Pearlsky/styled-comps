import styled from "styled-components";
import Button from "./Button";

const Title = styled.h1`
  color: #aac9f0;
`;

const Section = styled.div`
  background-color: #f0d1aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`;

const Content = () => {
  return (
    <>
      <Section className="section">
        <Title>💅 Section</Title>
        <Button/>
        <Button/>
      </Section>
    </>
  );
};

export default Content;
