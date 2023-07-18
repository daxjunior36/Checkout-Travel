import styled from "styled-components";

export const Input = styled.input`
height: ${(props) => props.height}px;
width: ${(props) => props.width}px;
border-radius: ${(props) => props.borderRadius}px;
font-size: ${(props) => props.fontSize}px;
font-weight: ${(props) => props.fontWeight}px;
font-style: ${(props) => props.fontStyle};
background-color: ${(props)=> props.theme.COLORS.WHITE };
/* background-image: ${(props) => props.backgroundImage}; */
/* padding: 12.6px 53px 12.6px 42px; */

`