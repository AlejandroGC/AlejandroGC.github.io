import React from 'react'
import { Flex, Spacer, flexbox, VStack, Text, Spacing, SimpleGrid, GridItem, Link, Badge, Card, CardBody, CardFooter, CardHeader, Heading, Img } from '@chakra-ui/react'

import logo from '../assets/logo.png'
import Google from '../assets/Google.png'

function Projects() {
  return (
    <Flex id='projects' p='4rem 8rem 1rem 0' color='#FFF2D8' direction='column'>
        <SimpleGrid templateColumns='repeat(4, 1fr)' gap='10'>
            <GridItem colSpan='4'>
                <Link target='_blank' href='https://github.com/Alexcgzz/CemexGO' textDecoration='none' _hover={{ textDecoration: 'none'}}>
                    <Card textAlign='left' backgroundColor='#113946' textColor='#FFF2D8' boxShadow='none' transition='0.5s' _hover={{ transition: '0.5s',  boxShadow: '0 0 15px #176B87', backgroundColor: '#176B87' }}>
                        <SimpleGrid templateColumns='repeat(9, 1fr)'>
                            <GridItem colSpan='2'>
                                <CardHeader>
                                    <Img boxSize='70px' src={logo}></Img>
                                </CardHeader> 
                            </GridItem>
                            <GridItem colSpan='7'>
                                <CardHeader>
                                    <Heading size='sm'>System for Defect Clustering @ Cemex Go</Heading>
                                </CardHeader>
                                <CardBody textAlign='justify' mr='10' pt='0'>
                                Collaborated with a team to develop a proof of concept system that receives an input file of bug reports, analyzes it, and gives
                                results, and displays them in a dashboard. Created a data aggregation infrastructure for data analysis on a Mongo database to store 
                                all the records of the previous results. Built the UI and the APIs connecting the front-end with the back-end. Contributed to the 
                                development of the project documentation to ensure effective project management.
                                </CardBody>
                                <CardFooter gap='3'>
                                    <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>React</Badge>
                                    <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>NodeJS</Badge>
                                    <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>Python</Badge>
                                    <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>MongoDB</Badge>
                                </CardFooter>
                            </GridItem>
                        </SimpleGrid>
                    </Card>
                </Link>
            </GridItem>
        </SimpleGrid>
    </Flex>
  )
}

export default Projects