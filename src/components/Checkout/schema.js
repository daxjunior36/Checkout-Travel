// import React from "react";
import Errors from "../../utils/Erros/errorsMessage";
import * as yup from "yup";
import moment from 'moment';



const schema = yup.object({
  localPartida: yup.string().required( Errors.REQUIRED),
  localDestino: yup.string().required(Errors.REQUIRED),
  dataIda: yup.string().test('verifica data', Errors.DATE_INVALID, (valueAtual, contexto) => {
   const {dataVolta} = contexto.parent
   const formatDataIda = moment(valueAtual).format('MM/DD/YYYY')
   const formatDataHoje = moment().format('MM/DD/YYYY')
   const formatDataVolta = moment(dataVolta).format('MM/DD/YYYY')
   if(!dataVolta || !valueAtual) return false
   console.log(formatDataIda < formatDataHoje, formatDataHoje,  formatDataIda, dataVolta);
   if(formatDataVolta < formatDataIda) return false
   if(formatDataIda < formatDataHoje) return false
   return true
    // console.log(valueAtual, contexto);
  }).required(Errors.REQUIRED),
  dataVolta: yup.string().required(Errors.REQUIRED),
  passageirosAdultos: yup.number().required(Errors.REQUIRED),
  passageirosCrincas: yup.number().required(Errors.REQUIRED),
  passageirosBebes: yup.number().required(Errors.REQUIRED),
  email: yup.string().required(Errors.REQUIRED),
  nome: yup.string().required(Errors.REQUIRED),

})

export default schema;