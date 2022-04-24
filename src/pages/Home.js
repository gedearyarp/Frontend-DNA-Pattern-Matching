import React from 'react';
import dnaLogo from '../images/dnalogoresize.png';
import { 
    Link 
} from "react-router-dom";
import {
    Center,
    Stack,
    Box,
    Image,
    Text,
    Button,
    Spacer,
    Flex,
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
} from '@chakra-ui/icons'


function Home() {
    return (
        <Flex w="100%" bg="#FFFFFE" alignItems="center" justifyContent="center">
            <Stack h="100%" d="flex" flexDir="column" alignItems="center" justifyContent="center">
                <Box h="80%" pt="12%">

                    {/* LOGO WEBSITE */}
                    <Box pb="1.5%" h="10%">
                        <Image src={dnaLogo} h="auto" maxH="153" mx="auto" alt='DNA Prasmanan Logo'/>
                    </Box>

                    {/* LANDING TEXT */}
                    <Box>
                        <Text fontSize="42px" align="center" fontWeight="bold" color="#2B2C34" mb="3.5%">
                            Identify Your Disease <br/>
                            With DNAmatch
                        </Text>
                    </Box>

                    {/* BUTTONS */}
                    <Box>
                        <Center>
                            <Stack spacing="15px">
                                <Link to="/check-dna">
                                    <Button px="25px" py="20px" bg="#E45858" border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%">
                                        <Text color="#FFFFFE" fontSize="21px" m="3">
                                            Test Your DNA
                                        </Text>
                                        <Spacer />
                                        <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                                    </Button>
                                </Link>

                                <Link to="/search-dna">
                                    <Button px="25px" py="20px" bg="#6246EA" border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%">
                                        <Text color="#FFFFFE" fontSize="21px" m={3}>
                                            Search History
                                        </Text>
                                        <Spacer />
                                        <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                                    </Button>
                                </Link>

                                <Link to="/upload-dna">
                                    <Button px="25px" py="20px" bg="#6246EA" border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%">
                                        <Text color="#FFFFFE" fontSize="21px" m={3}>
                                            Upload DNA Disease
                                        </Text>
                                        <Spacer />
                                        <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                                    </Button>
                                </Link>
                            </Stack>
                        </Center>
                    </Box>
                </Box>

                {/* Watermark */}
                <Box h="20%" pt="10%">
                    <Center>
                        <Box  pb="1%">
                            <Text align="center">
                                © 2022 prasmanan.
                            </Text>
                            <Text align="center">
                                This site created to fulfill the tubes stima 3.
                            </Text>
                        </Box>
                    </Center>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Home;