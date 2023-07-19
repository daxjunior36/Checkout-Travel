import React from "react";
import * as Style from './styles';
import defaultTheme from "../../style/defaultTheme";


function InputContainer(props){

  return(
    <>
 <Style.Input 
 
 theme={defaultTheme} {...props} 
/>
{props.errors && <Style.ErrorMessage> {props.errors} </Style.ErrorMessage>}

    </>
)
}


export default InputContainer