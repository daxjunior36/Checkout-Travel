import styled from "styled-components";
import BackgroundCheckout from "../../assets/images/paisagem.jpg";


export const ContainerPrincipal =  styled.div`
display: flex;
flex-direction: column;
background-image: url(${BackgroundCheckout});
background-repeat: no-repeat;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-size: cover;


  /* @media (min-width: 768px) {
    max-width: 768px; 
    margin: 0 auto; 
  }

   @media (min-width: 992px) {
    max-width: 992px; 
  }

 
  @media (min-width: 1200px) {
    max-width: 1200px;
  } */

`

export const ErrorMessage = styled.p`
color: red;
`

export const Input = styled.input`

`

export const ContainerAuxilar = styled.div`
display: flex;
justify-content: center;
max-width:max-content;
padding: 40px;
flex-direction: column;
align-items: center;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 24.3px 0px rgba(166, 171, 189, 0.25);

`


export const Container01 = styled.section`
display: flex;
flex-direction: column;

`

export const TextCheckout = styled.p`
margin: 0;
color: #414042;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
margin-left: 20px;
margin-bottom:48px;

`


export const InfoContainer01 = styled.section`
display: flex;

`

export const InfoContent = styled.div`
::placeholder { 
  padding: 20px;

 } 
`

export const LocalContainer = styled.div`
::placeholder { 
  padding: 40px;

 } 

img{
  position: relative;
  top:5px;
 left: 30px;
}
`


export const LabelLocPartida = styled.label`
display: flex;
color: #666;
flex-direction: column;
font-family: sans-serif;
font-style: italic;
line-height: normal;
border-radius: 8px;

img{
  width: 20px;
  height: 20px;
}
`

export const TextPartida = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
margin-top: 5px;
margin-left: 20px ;

/* border: solid red; */
`


export const LabelLocDestino = styled.label`
display: flex;
flex-direction: column;
color: #666;
font-family: sans-serif;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;

img{
  width: 20px;
  height: 20px;
}
`

export const TextDestino = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
margin-top: 5px;
margin-left: 20px;
`


export const LabelDataIda = styled.label`
display: flex;
flex-direction: column;
color: #666;
font-family: sans-serif;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
margin-left:20px;

`


export const TextData = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
margin-top: 5px;

`



export const LabelDataVolta = styled.label`
width: 220px;
color: #666;
font-family: sans-serif;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
margin-left:20px;
`

export const InputSelector =  styled.input`
width: 220px;
height: 48.2px;
display: flex;
`


export const AdultoContainer =  styled.div`
display: flex;
display: flex;
flex-direction: column;
/* border: solid black; */

img {
width: 20px;
height: 20px;
margin-left: 10px;
}
`


export const TextInfoPassageiro = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 23px; 
margin-top: 0;
margin-bottom: 5px;

`

export const SelectAdultos = styled.select`
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
font-family: sans-serif;
font-size: 14px;
color: #3B3C3C;
width: 200px;
background-color: #4FDCE1;
background: linear-gradient(341deg, #4FDCE1 0%, #1EB5BA 79.38%);
box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.25);

  ${({ errors }) => errors && `
    border: solid 0.5px red;
  `}

`

export const SelectCriancas = styled.select`
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 14px;
color: #3B3C3C;
background: linear-gradient(341deg, #4FDCE1 0%, #1EB5BA 79.38%);
box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.25);

`


export const SelectBebes = styled.select`
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 14px;
color: #3B3C3C;
background: linear-gradient(341deg, #4FDCE1 0%, #1EB5BA 79.38%);
box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.25);

`



export const AdultoLabel = styled.label`
display: flex;
width: 20px;
height: 20px;
margin-left: 10px;

`

export const AdultoText = styled.p`
font-family: sans-serif;
font-size: 15px;
font-style: italic;
font-weight: 600;
margin-top: 0;
margin-left: 10px;
`


export const LabelNumPassageiros= styled.label`

color: #666;
font-family: sans-serif;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;

`



export const Container02 = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`

export const TextDados = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 30px;

`


export const InfoContainer02 = styled.div`
display: flex;
align-items: center;
width: 100%;
/* border: solid orange; */
`



export const LabelName = styled.label`
margin-top: 22px;
margin-right:83px;
border: none;
margin-right:83;
margin-top: 0;
`


export const TextName = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px;
margin-bottom: 5px;

`

export const LabelEmail = styled.label`
margin-top: 22px;
margin-right:95;
margin-top: 0;
`

export const TextEmail = styled.p`
color: #414042;
font-family: sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 18px;
margin-bottom: 5px;
`



export const ButonBuscar = styled.button`
margin-top: 30px;
color: #FFFFFF;
font-family: sans-serif;
margin-left: 95px;
padding: 17px 33.95px 17px 34.05px;
justify-content: center;
align-items: center;
border-radius: 15px;
background: linear-gradient(341deg, #4FDCE1 0%, #1EB5BA 79.38%);
box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.25);
border: none;
`