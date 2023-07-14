import React from "react";
import * as Style from './styles';
import defaultTheme from "../../style/defaultTheme";


function InputContainer(props){
return(
 <Style.Input 
 theme={defaultTheme} {...props}
/>
)
}


export default InputContainer