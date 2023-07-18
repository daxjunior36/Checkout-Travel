<Style.ContainerAuxilar>
<Style.Container01>
  <Style.TextCheckout>CHECKOUT</Style.TextCheckout>
  <Style.InfoContainer01 onSubmit={handleSubmit(on)}>
               <Style.LabelLocPartida>
      <img src={AviaoUp} alt="ícone avião" />
      <input
      name="localPartida"
      {...register('localPartida', {required:true})}
      />
      {/* <InputContainer
        type="text"
        placeholder="Local de partida"
        height={23}
        width={123}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="localPartida"
        register={register}
      /> */}
    </Style.LabelLocPartida>
    <img src={SetasLR} alt="ícone de setas" />
    <Style.LabelLocDestino>
      <img src={AviaoDown} alt="ícone avião" />
      <InputContainer
        type="text"
        placeholder="Local de destino"
        height={23}
        width={123}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="localDestino"
       
        register={register}
      />
    </Style.LabelLocDestino>
    <Style.LabelDataIda>
      {/* <DatePicker
    selected={selectedDate}
    onChange={date => selectedDate(date)} 
    placeholderText='BirthDate'
    /> */}
      <InputContainer
        type="date"
        placeholder="Data"
        height={23}
        width={123}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="data"
       
        register={register}
      />
    </Style.LabelDataIda>
    <Style.LabelDataVolta>
      <InputContainer
        type="date"
        height={23}
        width={123}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="dataPartida"
       
        register={register}
      />
    </Style.LabelDataVolta>
    {/* <Style.LabelNumPassageiros>
<Style.InputSelector type='select'/>
<img src={Passageiros} alt="ícone pessoas" /> 
</Style.LabelNumPassageiros> */}
    {/* <section style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}> */}
    {/* <section>
  <p>Adultos</p>
  <p>13 anos ou mais</p>
</section>
<section style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
  <button>-</button>
  <p>0</p>
  <button>+</button>
</section>
</section> */}
    <Style.AdultoContainer>
        <img src={Passageiros} alt="" />
        <Style.PassagText>Passageiros</Style.PassagText>
      <Style.AdultoLabel>
        <InputContainer
              type="select"
              placeholder="Adultos - 13 anos ou mais"
              height={23}
              width={123}
              fontSize={17}
              fontWeight={400}
              borderRadius={8}
              name="passageiro"
             
              register={register}
        />
        <Style.AdultoText>Adultos - 13 anos ou mais</Style.AdultoText>
        <Style.NegativoButton>-</Style.NegativoButton>
        <Style.PositivoButton>+</Style.PositivoButton>
      </Style.AdultoLabel>
    </Style.AdultoContainer>
  </Style.InfoContainer01>
</Style.Container01>
<Style.Container02>
  <Style.TextDados>DADOS PASSAGEIRO PRINCIPAL</Style.TextDados>
  <Style.InfoContainer02>
    <Style.LabelName>
      <InputContainer
        type="text"
        placeholder="Nome do passageiro principal"
        height={48}
        width={291}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="nome"
       
        register={register}
      />
    </Style.LabelName>
    <Style.LabelEmail>
      <InputContainer
        type="text"
        placeholder="E-mail do passageiro principal"
        height={48}
        width={291}
        fontSize={17}
        fontWeight={400}
        borderRadius={8}
        name="email"               
        register={register}
      />
    </Style.LabelEmail>
    <Style.ButonBuscar onClick={()=> {console.log(errors);}} label="Buscar" type="submit" >
      BUSCAR
    </Style.ButonBuscar>
  </Style.InfoContainer02>
</Style.Container02>
</Style.ContainerAuxilar>