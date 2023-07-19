import * as Style from "./styles";
import React from "react";
import Logo from "../../assets/images/logoWizzi.svg";
import Ajuda from "../../assets/icons/ajuda.svg";
import Menu from "../../assets/icons/menu.svg";
import Promo from "../../assets/icons/promo.svg";
import Pacotes from "../../assets/icons/pacotes.svg";
import Hoteis from "../../assets/icons/hotel.svg";
import Voos from "../../assets/icons/aviao.svg";
import Onibus from "../../assets/icons/onibus.svg";
import Top from "../../assets/icons/topOfertas.svg";
import Carros from "../../assets/icons/carros.svg";


export default function Header() {
  return (
    <Style.ContainerPrincipal>
      <Style.LogoContainer>
        <img src={Logo} alt="logomarca" /> 
        <Style.AjudaMenuContainer>    
         <Style.AjudaContent>
        <img src={Ajuda} alt="ícone de ajuda" />
        <Style.TextAjuda>Ajuda</Style.TextAjuda>
         </Style.AjudaContent>
         <Style.AjudaContent>
        <img src={Menu} alt="ícone de menú" />      
        <Style.TextMenu>Menu</Style.TextMenu>
         </Style.AjudaContent>

       
        </Style.AjudaMenuContainer>
      </Style.LogoContainer>
      <Style.InfoContainer>
        <Style.TextPromoContainer>
      <img src={Promo} alt="ícone promoções" />
      <Style.TextPromo>Promoções</Style.TextPromo>
        </Style.TextPromoContainer>
        <Style.TextPacotesContainer>
      <img src={Pacotes} alt="ícone Pacotes" />
      <Style.TextPacotes>Pacotes</Style.TextPacotes>
        </Style.TextPacotesContainer>
        <Style.TextHoteisContainer>
      <img src={Hoteis} alt="ícone Hotel" />
      <Style.TextHoteis>Hotéis</Style.TextHoteis>
        </Style.TextHoteisContainer>
        <Style.TextVoosContainer>
      <img src={Voos} alt="ícone avião" />
      <Style.TextVoos>Voos</Style.TextVoos>
        </Style.TextVoosContainer>
        <Style.TextOnibusContainer>
      <img src={Onibus} alt="ícone ônibus" />
      <Style.TextOnibus>Ônibus</Style.TextOnibus>
        </Style.TextOnibusContainer>
        <Style.TextTopContainer>
      <img src={Top} alt="ícone Ofertas" />
      <Style.TextTop>Top Ofertas</Style.TextTop>
        </Style.TextTopContainer>
        <Style.TextCarrosContainer>
      <img src={Carros} alt="ícone Carro" />
      <Style.TextCarros>Carros</Style.TextCarros>
        </Style.TextCarrosContainer>

      </Style.InfoContainer>
    </Style.ContainerPrincipal>
  );
}
