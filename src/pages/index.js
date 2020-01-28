import React from "react"
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { Flex } from "rebass";
import Navbar from '../Components/navbar';
import About from '../Components/about';
import Header from '../Components/header';
import backgroundImage from '../images/dark-purple-blurred-water.jpg';

export default (props) => (

<ThemeProvider theme={theme}>
  <Flex flexDirection="column" sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh'
    }}>
    <Navbar/>
    <Header/>
    </Flex>
    <About/>
  </ThemeProvider>)