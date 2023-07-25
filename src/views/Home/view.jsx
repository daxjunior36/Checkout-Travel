import React from 'react'
import Checkout from '../../components/Checkout'
import Header from '../../components/Header'
import Packages from '../../components/Packages'
import Questions from '../../components/Questions'
import Carrossel from '../../components/Carrossel'



export default function Home() {
  return (
    <div>
      <Header />
      <Checkout />
      <Packages />
      <Questions />
      <Carrossel />
    </div>
  )
}
