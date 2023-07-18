import React from "react";
import * as Style from "./styles";
import SetasLR from "../../assets/icons/setasLR.svg";
import AviaoUp from "../../assets/icons/aviaoUP.svg";
import AviaoDown from "../../assets/icons/aviaoDOW.svg";
import Passageiros from "../../assets/icons/passageiros.svg";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import InputContainer from "../Input";
import schema from "./schema";



export default function Checkout() {
  const { handleSubmit, control, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  })
  
 function onSubmit() {
 
console.log(errors);
 }
  return (
    <Style.ContainerPrincipal>
      <Style.ContainerAuxilar>
  <form onSubmit = {handleSubmit(onSubmit) }>
  <Style.Container01>
  <Style.TextCheckout>CHECKOUT</Style.TextCheckout>
  <Style.InfoContainer01 >
        
      <Style.LabelLocPartida>
      <img src={AviaoUp} alt="ícone avião" />
     
      <Controller
        name="localPartida"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          // backgroundImage= {AviaoUp}
          errors={errors?.localPartida?.message}
          control={control}
           type="text"
           placeholder="Local de partida"
           height={48}
           width={220}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />     
    </Style.LabelLocPartida>
    <img src={SetasLR} alt="ícone de setas" />


    <Style.LabelLocDestino>
      <img src={AviaoDown} alt="ícone avião" />
      <Controller
        name="localDestino"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          errors={errors?.localDestino?.message}
          control={control}
           type="text"
           placeholder="Local de destino"
           height={48}
           width={220}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />
 
    </Style.LabelLocDestino>
    <Style.LabelDataIda>
    <Controller
        name="dataIda"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          errors={errors?.dataIda?.message}
          control={control}
           type="date"
           height={48}
           width={220}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />

    </Style.LabelDataIda>
    <Style.LabelDataVolta>
    <Controller
        name="dataVolta"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          errors={errors?.dataVolta?.message}
          control={control}
           type="date"
           height={23}
           width={123}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />
 
    </Style.LabelDataVolta>
   
    <Style.AdultoContainer>
        <img src={Passageiros} alt="" />
        <Style.PassagText>Passageiros</Style.PassagText>
      {/* <Style.AdultoLabel> */}
      <Controller
        name="passageirosAdultos"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
        <Style.SelectAdultos
          errors={errors?.passageiros?.message}
          control={control}
          name={name}       
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
        <option value="Adultos">Adultos 12 anos ou mais</option>
        <option value="option1"> 1 Adulto</option>
        <option value="option2"> 2 Adultos</option>
        <option value="option3"> 3 Adultos</option>
        <option value="option4"> 4 Adultos</option>
        <option value="option5"> 5 Adultos</option>
        </Style.SelectAdultos>
         
        )}
      />
        <Controller 
        name="passageirosCriancas"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
        
        
        <Style.SelectCriancas
        errors={errors?.passageiros?.message}
        control={control}
        name={name}       
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        >
        <option value="Crianças">Crianças DE 2 A 12 anos</option>
        <option value="option1"> 1 Criança</option>
        <option value="option2"> 2 Crianças</option>
        <option value="option3"> 3 Crianças</option>
        <option value="option4"> 4 Crianças</option>
        <option value="option5"> 5 Crianças</option>
        </Style.SelectCriancas>
         )}
        />

<Controller
        name="passageirosBebes"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
        <Style.SelectBebes
          errors={errors?.passageiros?.message}
          control={control}
          name={name}       
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
        <option value="Bebês">Bebês Menor de 2 anos</option>
        <option value="option1"> 1 Bebê</option>
        <option value="option2"> 2 Bebês</option>
        <option value="option3"> 3 Bebês</option>
        <option value="option4"> 4 Bebês</option>
        <option value="option5"> 5 Bebês</option>
        </Style.SelectBebes>
         
        )}
      />

     
      {/* </Style.AdultoLabel> */}
    </Style.AdultoContainer>
  </Style.InfoContainer01>
</Style.Container01>

<Style.Container02>
  <Style.TextDados>DADOS PASSAGEIRO PRINCIPAL</Style.TextDados>
  <Style.InfoContainer02>
    <Style.LabelName>
    <Controller
        name="nome"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          errors={errors?.nome?.message}
          control={control}
           type="text"
           placeholder="Nome do passageiro principal"
           height={23}
           width={123}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />

    </Style.LabelName>
    <Style.LabelEmail>
    <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value, name }}) => (
         
          <InputContainer
          errors={errors?.email?.message}
          control={control}
           type="text"
           placeholder="E-mail do passageiro principal"
           height={23}
           width={123}
           fontSize={17}
           fontWeight={400}
           borderRadius={8}
           name={name}       
           onChange={onChange}
           onBlur={onBlur}
           value={value}
         />
        )}
      />

    </Style.LabelEmail>
    <Style.ButonBuscar onClick={()=> {console.log(errors);}} label="Buscar" type="submit" >
      BUSCAR
    </Style.ButonBuscar>
     
  </Style.InfoContainer02>
</Style.Container02>
</form>

</Style.ContainerAuxilar>
  </Style.ContainerPrincipal>
  );
}
