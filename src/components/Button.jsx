import React from 'react';
import styled from 'styled-components';

const COLORS = {
  green: {
    main: "rgb(45, 191, 103)",
    light: "rgb(74, 219, 133)",
    shadow: "rgb(39, 153, 88)",
  },
}


const Wrapper = styled.button`
  width: 150px;
  height: 50px;
  background: ${({color}) => COLORS[color].main};
  border-radius: 8px;
  border: none;
  border-bottom: ${({color}) => `5px solid ${COLORS[color].shadow}`};
  overflow: hidden;
  cursor: pointer;
  transition: .2s ease;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export default ({color, title, onClick}) => (
  <Wrapper onClick={() => onClick()} color={color}>
    {title}
  </Wrapper>
)