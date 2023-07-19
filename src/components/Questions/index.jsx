import React from 'react';
import * as Style from "./styles";

export default function Questions() {
  return (
    <Style.ContainerPrincipal>
      <Style.Duvidas>DÚVIDAS FREQUENTES</Style.Duvidas>
        <Style.InformeContainer>
          <Style.TextContainer>
          <Style.TextTitulo>COMO  COMPRAR </Style.TextTitulo>
          <Style.TextInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            
          </Style.TextInfo>
          </Style.TextContainer>

          <Style.TextContainer>
          <Style.TextTitulo>É SEGURO COMPRAR NA WIZZI?</Style.TextTitulo>
          <Style.TextInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been          
          </Style.TextInfo>
          </Style.TextContainer>

          <Style.TextContainer>
          <Style.TextTitulo>COMO ENTRAR EM CONTATO?</Style.TextTitulo>
          <Style.TextInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            
          </Style.TextInfo>
          </Style.TextContainer>
        </Style.InformeContainer>
          <Style.TextFooter>Se você está procurando os melhores preços em passagens aéreas e hotéis temos opções incríveis para você!
          </Style.TextFooter>
    </Style.ContainerPrincipal>
  )
}
