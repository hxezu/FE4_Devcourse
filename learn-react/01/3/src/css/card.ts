import styled from "styled-components";

export const Button = styled.button<{ on?: boolean }>`
  background: ${(props) => (props.on ? "palevioletred" : "white")};
  color: ${(props) => (props.on ? "white" : "palevioletred")};

  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
