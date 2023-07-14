import React from 'react'
import * as Style from "./styles";
import SetasLR from "../../assets/icons/setasLR.svg";
import AviaoUp from "../../assets/icons/aviaoUP.svg";
import AviaoDown from "../../assets/icons/aviaoDOW.svg";
// import Calendario from "../../assets/icons/calendario.svg";
import Passageiros from "../../assets/icons/passageiros.svg";
import InputContainer from '../Input';

export default function Checkout() {
  return (
  <Style.ContainerPrincipal >
   <Style.ContainerAuxilar>
 
    <Style.Container01>
    <Style.TextCheckout>CHECKOUT</Style.TextCheckout>
    <Style.InfoContainer01>
      <Style.LabelLocPartida>
      <img src={AviaoUp} alt="ícone avião" />
         <InputContainer  type="text"  placeholder="Local de partida" height={23} width={100} fontSize={17} fontWeight={400} borderRadius={8}   name="nome" onChange={(event) => (event)}/> 
      </Style.LabelLocPartida>
      <img src={SetasLR} alt="ícone de setas" />
      <Style.LabelLocDestino>
      <img src={AviaoDown} alt="ícone avião" />
      <InputContainer type="text" placeholder="Local de destino" height={23} width={123} fontSize={17} fontWeight={400} borderRadius={8}   name="nome" onChange={(event) => (event)}/> 
      </Style.LabelLocDestino>
         <Style.LabelDataIda>
        <Style.InputDate type='date'
         placeholder="Data" height={23} width={123} fontSize={17} fontWeight={400} borderRadius={8}   name="nome" onChange={(event) => (event)}/>
      </Style.LabelDataIda>
      <Style.LabelDataVolta>
      <InputContainer  type="date"  height={23} width={100} fontSize={17} fontWeight={400} borderRadius={8}   name="nome" onChange={(event) => (event)}/> 
        </Style.LabelDataVolta> 
           <Style.LabelNumPassageiros>
        <Style.InputSelector type='select'/>
    <img src={Passageiros} alt="ícone pessoas" /> 
      </Style.LabelNumPassageiros>
      </Style.InfoContainer01>
    </Style.Container01>
    <Style.Container02>
      <Style.TextDados>DADOS PASSAGEIRO PRINCIPAL</Style.TextDados>
      <Style.InfoContainer02>
      <Style.LabelName>Digite seu nome completo</Style.LabelName>
      <Style.LabelEmail>Digite seu email</Style.LabelEmail>
      <Style.ButonBuscar>BUSCAR</Style.ButonBuscar>
      </Style.InfoContainer02>
    </Style.Container02>

    </Style.ContainerAuxilar>
  </Style.ContainerPrincipal>
  )
}
