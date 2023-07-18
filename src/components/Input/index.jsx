import React from "react";
import * as Style from './styles';
import defaultTheme from "../../style/defaultTheme";


function InputContainer(props){

  return(
    <>
 <Style.Input 
 theme={defaultTheme} {...props} 
/>
{props.errors && <p> {props.errors} </p>}

    </>
)
}


export default InputContainer