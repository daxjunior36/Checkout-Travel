import styled from "styled-components";
import BackgroundCheckout from "../../assets/images/imagem-Principal.svg";



export const ContainerPrincipal =  styled.div`
display: flex;
flex-direction: column;
background-image: url(${BackgroundCheckout});
background-repeat: no-repeat;
position: relative;
height: 100vh;
width: 100vw;
background-size: cover;

`

export const ContainerAuxilar = styled.div`
display: flex;
padding: 40px;
flex-direction: column;
align-items: center;
gap: 20px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 24.3px 0px rgba(166, 171, 189, 0.25);
`


export const Container01 = styled.section`
display: flex;
flex-direction: column;
border: solid green;
`


export const InfoContainer01 = styled.div`
display: flex;
border: solid blueviolet;
`

export const TextCheckout = styled.p`
margin: 0;
color: #414042;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
margin-left: 102.5px;
`





export const LabelLocPartida = styled.label`
display: flex;
width: 220px;
height: 48.2px;
color: #666;
font-family: Nunito;
font-style: italic;
line-height: normal;
/* border: solid orange; */
img{
  width: 20px;
  height: 20px;
}
`




export const LabelLocDestino = styled.label`
display: flex;
width: 220px;
height: 48.2px;
color: #666;
font-family: Nunito;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
/* border: solid orange; */
img{
  width: 20px;
  height: 20px;
}
`




export const LabelDataIda = styled.label`
width: 220px;
color: #666;
font-family: Nunito;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
height: 48.2px;
`

export const InputDate =  styled.input`
border: none;
`



export const LabelDataVolta = styled.label`
width: 220px;
color: #666;
font-family: Nunito;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
height: 48.2px;
`

export const InputSelector =  styled.input`
`


export const LabelNumPassageiros= styled.label`
width: 220px;
height: 48.2px;
color: #666;
font-family: Nunito;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: normal;
`



export const Container02 = styled.div`
display: flex;
flex-direction: column;
/* border: solid red; */
`

export const TextDados = styled.p`
color: #414042;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 30px;
`


export const InfoContainer02 = styled.div`
border: solid blueviolet;
display: flex;
justify-content: flex-start;
width: 998px;
height: 70px;
`



export const LabelName = styled.label`
margin-top: 22px;
margin-right:83px;
width: 291px;
height: 48px;
border: solid red;
`

export const LabelEmail = styled.label`
margin-top: 22px;
margin-right:83px;
width: 291px;
height: 48px;
border-right: 91px;
border: solid red;
`

export const ButonBuscar = styled.button`
margin-top: 22px;
color: #FFFFFF;
padding: 17px 33.95px 17px 34.05px;
justify-content: center;
align-items: center;
border-radius: 15px;
background: linear-gradient(341deg, #4FDCE1 0%, #1EB5BA 79.38%);
box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.25);
border: none;
`