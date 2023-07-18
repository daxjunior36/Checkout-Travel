import styled from "styled-components";
import BackgroundCheckout from "../../assets/images/paisagem.jpg";
import AviaoUp from "../../assets/icons/aviaoUP.svg";
// import BackgroundCheckout from "../../assets/images/mar.jpg";


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

export const Input = styled.input`

`

export const ContainerAuxilar = styled.div`
display: flex;
width: 100%;
padding: 40px;
flex-direction: column;
align-items: center;
border: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 24.3px 0px rgba(166, 171, 189, 0.25);

`


export const Container01 = styled.section`
display: flex;
flex-direction: column;

`


export const InfoContainer01 = styled.section`
display: flex;

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
color: #666;
font-family: Nunito;
font-style: italic;
line-height: normal;
border: solid orange;
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

// export const InputDate =  styled.input`
// border: none;
// `



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
width: 220px;
height: 48.2px;
display: flex;
`


export const AdultoContainer =  styled.div`
display: flex;
border: solid black;
display: flex;
flex-direction: column;

img {
width: 20px;
height: 20px;
margin-left: 10px;
}
`

export const PassagText =  styled.p`

font-family: Nunito;
font-size: 20px;
font-style: italic;
font-weight: 600;
margin-top: 0;
margin-left: 10px;
`

export const SelectAdultos = styled.select`
 padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;

`

export const SelectCriancas = styled.select`
 padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;

`


export const SelectBebes = styled.select`
 padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;

`



export const AdultoLabel = styled.label`
display: flex;
width: 20px;
height: 20px;
margin-left: 10px;

`

export const AdultoText = styled.p`
font-family: Nunito;
font-size: 16px;
font-style: italic;
font-weight: 600;
margin-top: 0;
margin-left: 10px;
`


export const LabelNumPassageiros= styled.label`

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
border: solid orange;
display: flex;
align-items: center;
width: 100%;
`



export const LabelName = styled.label`
margin-top: 22px;
margin-right:83px;
border: none;

`

export const LabelEmail = styled.label`
margin-top: 22px;
margin-right:83px;
margin-top: 22px;
margin-right:83px;
border: none;


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