import React from 'react'
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js'
import Footer from './Components/Footer/Footer.js'
import { GlobalStyle } from "./Global/GlobalStyle.js"
export default function App(){


  return(
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
