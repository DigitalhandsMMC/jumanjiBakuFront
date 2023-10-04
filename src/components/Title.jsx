import React from "react";
import styled from "styled-components";
export default function Title({ value }) {
  return (
    <Div>
      <h1>{value}</h1>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-30%) translateY(20vh) rotate(-90deg);
    color: var(--primary-light);
    font-size: 7rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`;
