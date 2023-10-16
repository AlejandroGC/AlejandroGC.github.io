import React from 'react'
import { Flex, Grid, GridItem, SimpleGrid, Box } from '@chakra-ui/react'

import Navbar from './components/navbar'
import Experience from './pages/Experience'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './pages/Footer'


export default function content() {
    return (
        <>
            <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem colSpan='3' alignItems='center'>
                    <Navbar />
                </GridItem>
                <GridItem backgroundColor='#113946' colSpan='3' pb='20'>
                    <About />
                    <Experience />
                    <Projects />
                    <Footer />
                </GridItem>
            </Grid>

        </>

    )
}
