import React from 'react';
import * as Style from "./styles";
// import Foto2 from "../../assets/images/Foto2.svg";
import Foto1 from "../../assets/images/foto01.jpg";
import Foto3 from "../../assets/images/foto03.jpg";
import Foto5 from "../../assets/images/foto05.jpg";
import TextPacotes from "../../assets/icons/textPacotes.svg";
import Aviao from "../../assets/icons/aviaoBranco.svg";
import Bagagem from "../../assets/icons/bagagem.svg";
import Transfer from "../../assets/icons/transfer.svg";
import Hotel from "../../assets/icons/hotel02.svg";
import Cafe from "../../assets/icons/cafe.svg";
import Seguro from "../../assets/icons/seguro.svg";
import Seta from "../../assets/icons/seta-direita.svg";
import SetaBlack from "../../assets/icons/seta-dir-black.svg";

export default function Packages() {
  return (
    <Style.ContainerPrincipal>
      <Style.FotoInfoContainer>
      <img src={Foto3} alt="foto de por do sol" />
      <Style.PacotesImperdiveis>
      <img src={TextPacotes} alt="logomarca" />
        <Style.TextNacional>Nacional</Style.TextNacional>
        <Style.PasagemContainer>
      <img src={Aviao} alt="ícone avião" />
        <Style.TextPassagem>Passagem aérea (ida e volta)</Style.TextPassagem>
        </Style.PasagemContainer>
        <Style.BagagemContainer>
          <img src={Bagagem} alt="ícone Malas" />
        <Style.TextBagagem>Bagagens 23Kg (Gratuita para 7 diárias)</Style.TextBagagem>
        </Style.BagagemContainer> 
        <Style.TransferContainer>
          <img src={Transfer} alt="ícone carro" />
          <Style.TextTransfer>Transfer (Gratuito)</Style.TextTransfer>
        </Style.TransferContainer>
        <Style.HospedagemContainer>
          <img src={Hotel} alt="ícone hotel" />
          <Style.TextHospedagem>Hospedagem</Style.TextHospedagem>
        </Style.HospedagemContainer>
        <Style.CafeContainer>
          <img src={Cafe} alt="ícone café" />
          <Style.TextCafe>Café da manhã</Style.TextCafe>
        </Style.CafeContainer>
        <Style.SeguroContainer>
          <img src={Seguro} alt="ícone de seguro" />
          <Style.TextSeguro>Seguro Viagem (Gratuito)</Style.TextSeguro>
        </Style.SeguroContainer>
        <Style.ApartirContainer>
          <Style.TextApartir>a partir de</Style.TextApartir>
        </Style.ApartirContainer>
        <Style.ValorContainer>
          <Style.TextValor>R$ 849</Style.TextValor>
          <Style.TextPessoa>por pessoa</Style.TextPessoa>
        <img src={Seta} alt="ícone de seta" />
        </Style.ValorContainer>
      </Style.PacotesImperdiveis>
      </Style.FotoInfoContainer>

      <Style.FotoInfoContainer>
      <img src={Foto1} alt="foto de por do sol" />
      <Style.PacotesImperdiveis>
      <img src={TextPacotes} alt="logomarca" />
        <Style.TextNacional>Nacional</Style.TextNacional>
        <Style.PasagemContainer>
      <img src={Aviao} alt="ícone avião" />
        <Style.TextPassagem>Passagem aérea (ida e volta)</Style.TextPassagem>
        </Style.PasagemContainer>
        <Style.BagagemContainer>
          <img src={Bagagem} alt="ícone Malas" />
        <Style.TextBagagem>Bagagem 23Kg (Gratuita para 7 diárias)</Style.TextBagagem>
        </Style.BagagemContainer> 
        <Style.TransferContainer>
          <img src={Transfer} alt="ícone carro" />
          <Style.TextTransfer>Transfer (Gratuito)</Style.TextTransfer>
        </Style.TransferContainer>
        <Style.HospedagemContainer>
          <img src={Hotel} alt="ícone hotel" />
          <Style.TextHospedagem>Hospedagem</Style.TextHospedagem>
        </Style.HospedagemContainer>
        <Style.CafeContainer>
          <img src={Cafe} alt="ícone café" />
          <Style.TextCafe>Café da manhã</Style.TextCafe>
        </Style.CafeContainer>
        <Style.SeguroContainer>
          <img src={Seguro} alt="ícone de seguro" />
          <Style.TextSeguro>Seguro Viagem (Gratuito)</Style.TextSeguro>
        </Style.SeguroContainer>
        <Style.ApartirContainer>
          <Style.TextApartir>a partir de</Style.TextApartir>
        </Style.ApartirContainer>
        <Style.ValorContainer>
          <Style.TextValor>R$ 849</Style.TextValor>
          <Style.TextPessoa>por pessoa</Style.TextPessoa>
        <img src={Seta} alt="ícone de seta" />
        </Style.ValorContainer>
      </Style.PacotesImperdiveis>
      </Style.FotoInfoContainer>

      <Style.FotoInfoContainer02>
      <img src={Foto5} alt="foto de por do sol" />
      <Style.InformeContainer>
       
      <Style.TextPacotes>VOOS</Style.TextPacotes>
    <Style.ValorContainer02>
          <Style.TextDiarias>3 diárias a partir de</Style.TextDiarias>
          <Style.TextValor02>R$ 156</Style.TextValor02>
           <img src={SetaBlack} alt="ícone de seta" />
        </Style.ValorContainer02>   
    </Style.InformeContainer>
      </Style.FotoInfoContainer02>


      <Style.FotoInfoContainer02>
      <img src={Foto5} alt="foto de por do sol" />
      <Style.InformeContainer>
      <Style.TextPacotes>VOOS</Style.TextPacotes>
    <Style.ValorContainer02>
          <Style.TextDiarias>3 diárias a partir de</Style.TextDiarias>
          <Style.TextValor02>R$ 156</Style.TextValor02>
           <img src={SetaBlack} alt="ícone de seta" />
        </Style.ValorContainer02>   
    </Style.InformeContainer>
      </Style.FotoInfoContainer02>

    </Style.ContainerPrincipal>

    
  )
}
