import styled from "styled-components"

export const Title = styled.h1`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};
  background-color: black;
  span {
    font-size: 1.5em;
    color: #00ff00; 
  }
`

export const TitleSmall = styled(Title)`
  color: #00f;
  font-size: 20px;
`