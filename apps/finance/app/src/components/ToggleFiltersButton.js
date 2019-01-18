import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledButton = styled.button`
  border: none;
  background: none;
  height: 16px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: 2px solid ${theme.accent};
  }
  &:active {
    border: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`

export default props => (
  <StyledButton {...props}>
    <svg width="16" height="14">
      <path
        d="M10.421 2.667H.631C.275 2.667 0 2.377 0 2c0-.378.274-.667.632-.667h9.79C10.694.556 11.388 0 12.21 0c.822 0 1.537.556 1.79 1.333h1.368c.358 0 .632.29.632.667 0 .378-.274.667-.632.667H14C13.726 3.444 13.032 4 12.21 4c-.82 0-1.536-.556-1.789-1.333zM16 7c0 .378-.274.667-.632.667h-9.79C5.327 8.444 4.612 9 3.79 9 2.97 9 2.274 8.444 2 7.667H.632C.274 7.667 0 7.377 0 7c0-.378.274-.667.632-.667H2C2.253 5.556 2.968 5 3.79 5c.82 0 1.515.556 1.789 1.333h9.79c.357 0 .631.29.631.667zm-.632 4.333H9.79C9.537 10.556 8.821 10 8 10s-1.516.556-1.79 1.333H.633c-.358 0-.632.29-.632.667 0 .378.274.667.632.667H6.21C6.463 13.444 7.179 14 8 14s1.516-.556 1.79-1.333h5.578c.358 0 .632-.29.632-.667 0-.378-.274-.667-.632-.667z"
        fill="#000"
      />
    </svg>
  </StyledButton>
)
