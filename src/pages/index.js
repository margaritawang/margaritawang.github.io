import React from "react"
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import Navbar from '../Components/navbar';

export default (props) => (

<ThemeProvider theme={theme}>
    <Navbar/>
    <h1>Hello Gatsby!</h1>
  </ThemeProvider>)