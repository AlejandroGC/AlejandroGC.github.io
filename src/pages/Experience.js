import React from 'react'
import { Flex, Spacer, flexbox, VStack, Text, Spacing, SimpleGrid, GridItem, Card, CardBody, CardFooter, CardHeader, Heading, Badge, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Navbar from '../components/navbar'

function Experience() {
    return (
        <>
            <Flex id='experience' p='4rem 8rem 1rem 0' color='#FFF2D8' direction='column'>
                <SimpleGrid templateColumns='repeat(4, 1fr)' gap='10'>
                    <GridItem colSpan='4'>
                        <Link target='_blank' href='https://teknik.mx/' textDecoration='none' _hover={{ textDecoration: 'none'}}>
                            <Card textAlign='left' backgroundColor='#113946' textColor='#FFF2D8' boxShadow='none' transition='0.5s' _hover={{ transition: '0.5s',  boxShadow: '0 0 15px #176B87', backgroundColor: '#176B87' }}>
                                <SimpleGrid templateColumns='repeat(9, 1fr)'>
                                    <GridItem colSpan='2'>
                                        <CardHeader>
                                            <Text fontSize='12' fontWeight='bold'>March - July 2023</Text>
                                        </CardHeader> 
                                    </GridItem>
                                    <GridItem colSpan='7'>
                                        <CardHeader>
                                            <Heading size='sm'>Remote Internship @ Teknik.mx</Heading>
                                            <Text>Intern</Text>
                                        </CardHeader>
                                        <CardBody textAlign='justify' mr='10' pt='0'>
                                        Collaborated in the development of features for a gasoline dispatcher client application, utilizing React Native, and Expo.
                                        Created a comprehensive user guide to facilitate new users in understanding the application's functionality and features
                                        effectively. Through my contributions, this application achieved an increase in functionality, and seamless user experience.
                                        </CardBody>
                                        <CardFooter gap='3'>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>React Native</Badge>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>Expo</Badge>

                                        </CardFooter>
                                    </GridItem>
                                </SimpleGrid>
                            </Card>
                        </Link>
                    </GridItem>
                    <GridItem colSpan='4'>
                        <Link textDecoration='none' _hover={{ textDecoration: 'none'}}>
                            <Card textAlign='left' backgroundColor='#113946' textColor='#FFF2D8' boxShadow='none' transition='0.5s' _hover={{ transition: '0.5s',  boxShadow: '0 0 15px #176B87', backgroundColor: '#176B87' }}>
                                <SimpleGrid templateColumns='repeat(9, 1fr)'>
                                    <GridItem colSpan='2'>
                                        <CardHeader>
                                            <Text fontSize='12' fontWeight='bold'>Feb - May 2021</Text>
                                        </CardHeader> 
                                    </GridItem>
                                    <GridItem colSpan='7'>
                                        <CardHeader>
                                            <Heading size='sm'>Google Software Product Sprint</Heading>
                                            <Text>Participant</Text>
                                        </CardHeader>
                                        <CardBody textAlign='justify' mr='10' pt='0'>
                                            Collaborated with a team to design and implement a web application using Java, JavaScript, HTML and CSS over the
                                            course of 10 weeks, leveraging various Google Cloud Platform APIs, including App Engine and Datastore.
                                            Practiced industry best practices such as: contributing to open-source software using Git and GitHub, conducting code
                                            reviews, participating in distributed development, designing new components and interfaces, and leading them to
                                            completion.
                                        </CardBody>
                                        <CardFooter gap='3'>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>HTML</Badge>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>CSS</Badge>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>Javascript</Badge>
                                            <Badge colorScheme='cyan' p='3px 6px' borderRadius='5'>Java</Badge>
                                        </CardFooter>
                                    </GridItem>
                                </SimpleGrid>
                            </Card>
                        </Link>
                    </GridItem>
                </SimpleGrid>
                <Flex mt='10'>
                    <Link>
                        <Text fontWeight='bold' size='sm'>View Full Resume <ArrowForwardIcon/></Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}

export default Experience