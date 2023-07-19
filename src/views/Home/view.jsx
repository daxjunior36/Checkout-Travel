import React from 'react'
import Checkout from '../../components/Checkout'
import Header from '../../components/Header'
import Packages from '../../components/Packages'

export default function Home() {
  return (
    <div>
      <Header />
      <Checkout />
      <Packages />
    </div>
  )
}
