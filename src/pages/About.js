import React from 'react'
import { Flex, Spacer, flexbox, VStack, Text, Spacing, Link, Box } from '@chakra-ui/react'

function About() {
  return (
    <Flex id='about' p='4rem 8rem 1rem 0' color='#FFF2D8' direction='column'>
                <VStack gap='5'>
                    <Text textAlign='justify' fontWeight='500' color='#4F7973'>
                        In 2018, I joined a programming course at my high school, where I started learning the basics of Java. 
                        This introduction to programming intrigued me, sparking a genuine interest in diving deeper into the world of coding. 
                        As time passed, my passion for programming grew, leading me to work on a variety of personal projects throughout my 
                        university years. I had the opportunity to collaborate with <Link target='_blank' href='https://www.cemexgo.com/login' fontWeight='bold' color='#CEDBD0' _hover={{ color: 'cyan' }}>major companies </Link> 
                        and a <Link target='_blank' href='https://teknik.mx/' fontWeight='bold' color='#CEDBD0' _hover={{ color: 'cyan' }}>consulting tech firm</Link>, gaining valuable hands-on experience in the process.
                    </Text>
                    <Text textAlign='justify' fontWeight='500' color='#4F7973'>
                        Along the way, I co-founded <Link fontWeight='bold' color='#CEDBD0' _hover={{ color: 'cyan' }}>Taurithm</Link>, a small consulting company, with some friends. 
                        Together, we ventured into the entrepreneurial world, working on projects and expanding our skills. Currently, my main 
                        focus is on completing my studies at <Link target='_blank' href='https://tec.mx/en' fontWeight='bold' color='#CEDBD0' _hover={{ color: 'cyan' }}>Tecnologico de Monterrey</Link>. I'm dedicated to not only obtaining my degree but also 
                        nurturing and growing my entrepreneurial endeavor. 
                    </Text>
                    <Text textAlign='justify' fontWeight='500' color='#4F7973'>
                        To further enhance my programming expertise, I've been actively 
                        engaging in online courses through platforms like <Link target='_blank' href='https://ed.team/' fontWeight='bold' color='#CEDBD0' _hover={{ color: 'cyan' }}>EDteam</Link>. These courses have been instrumental in honing my skills 
                        and keeping me up-to-date with the latest developments in the tech industry.
                    </Text>
                    <Text textAlign='justify'  color='#4F7973'>
                        Outside the realm of programming, I find balance in my life by participating in local soccer leagues, enjoying quality 
                        time with my girlfriend, hanging out with friends, and occasionally immersing myself in the world of video games. 
                        These diverse interests not only provide relaxation but also inspire creativity, allowing me to approach my coding 
                        projects with fresh perspectives.
                    </Text>
                </VStack>
            </Flex>
  )
}

export default About