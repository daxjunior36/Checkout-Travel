import React from 'react'
import Checkout from '../../components/Checkout'
import Header from '../../components/Header'
import Packages from '../../components/Packages'
import Questions from '../../components/Questions'

export default function Home() {
  return (
    <div>
      <Header />
      <Checkout />
      <Packages />
      <Questions />
    </div>
  )
}
