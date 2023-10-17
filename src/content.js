import React from 'react'
import './content.css';
import jQuery from 'jquery';


import { Flex, Grid, GridItem, SimpleGrid, Box } from '@chakra-ui/react'

import Navbar from './components/navbar'
import Experience from './pages/Experience'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './pages/Footer' 

function content() {
    return (
        <>
            <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem colSpan='3' alignItems='center'>
                    <Navbar />
                </GridItem>
                <GridItem backgroundColor='#113946' colSpan='3'>
                    <About />
                    <Experience />
                    <Projects />
                    <Footer />
                </GridItem>
            </Grid>

        </>

    )
}

export default content
