import React from 'react';
import Header from '../components/Header'
import {
    // Flex,
    Stack,
    Input,
    Button,
    Select,
    Center,
    Box,
    Text,
    Grid,
    GridItem,

} from '@chakra-ui/react';

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

function CheckDNA() {
    return (

        <Box>
            {/* HEADER -> NAVBAR */}
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Test'/>
            </Box>
            
            {/* CONTENT */}
            <Stack  pr="10%" pl="10%" pt="3%" h="87vh">

                {/* TEXT LANDING */}
                <Center>
                    <Box pb="2%">
                        <Text 
                            fontWeight="bold" 
                            w="auto" 
                            fontSize={{xl:'36px', lg:'33px', md:'29px', sm:'24px'}} 
                            align="center" 
                            borderBottom="2px" 
                            borderColor="#E45858" 
                            W="10px"
                        >
                            DNA TESTING
                        </Text>
                    </Box>
                </Center>

                {/* Input */}
                    <Grid 
                        gap={1} 
                        templateColumns="repeat(14,1fr)" 
                        templateRows="repeat(1,1fr)" 
                    >
                        {/* Row 1 : Text */}
                        <GridItem colSpan={4}>
                            <Text 
                                align="center" 
                                fontWeight="bold" 
                                fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} 
                                pb="4px"
                            >
                                Username
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1}/>
                        <GridItem colSpan={4}>
                            <Text 
                                align="center" 
                                fontWeight="bold" 
                                fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} 
                                pb="4px"
                            >
                                User Sequence DNA
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Text 
                                align="center"
                                fontWeight="bold" 
                                fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} 
                                pb="4px"
                            >
                                Disease Prediction
                            </Text>
                        </GridItem>

                        {/* Row 2 : Button & Space */}
                        <GridItem colSpan={4}>
                            <Input
                                py="20px" 
                                border='4px' 
                                borderColor="#2B2C34" 
                                borderRadius='30px'
                                w="100%" 
                                bg="#D1D1E9" 
                                variant='filled' 
                                color="#515151"
                                placeholder="Your name here" 
                                textAlign="center" 
                                fontWeight="normal"
                                fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'9px'}} 
                            />
                        </GridItem>
                        <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Button 
                                py="20px" 
                                border='4px' 
                                borderColor="#2B2C34" 
                                borderRadius='30px'
                                w="100%" 
                                bg="#D1D1E9"
                                fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'9px'}}
                            >
                                <Text color="#515151" m="3" fontStyle="italic" fontWeight="normal">
                                    Upload file
                                </Text>
                            </Button>
                        </GridItem>
                        <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Select
                                border='4px' 
                                borderColor="#2B2C34" 
                                borderRadius='30px'
                                h="100%" 
                                w="100%" 
                                bg="#E45858" 
                                variant='filled' 
                                placeholder="Choose Disease"
                                fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'9px'}} 
                            /> 
                            <Text 
                                fontSize="15px"
                                mt="5px"
                            >  
                                *If the disease cannot be found, please upload the disease's DNA sequence beforehand.
                            </Text>
                        </GridItem>
                        
                        {/* Submit Button */}
                        <GridItem colSpan={14}>
                            <Center 
                                pt="2.5%" 
                                pb="2%"
                            >
                                <Button 
                                    py="20px" 
                                    w="25%" 
                                    bg="#6246EA" 
                                    border='4px' 
                                    borderColor="#2B2C34" 
                                    borderRadius='30px'
                                >
                                    <Text 
                                        color="#FFFFFE" 
                                        fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'7'}} 
                                        m={4}
                                    >
                                        Submit
                                    </Text>
                                </Button>
                            </Center>
                        </GridItem>

                        {/* Result */}
                        <GridItem colSpan={14}>
                            <Box 
                                p="2.5%" 
                                px="3%" 
                                border="2px" 
                                h="auto" 
                                borderRadius="25px"
                                mt="50px"
                            >
                                <Stack 
                                    spacing="1%" 
                                    fontSize={{xl:'18px', lg:'15.5px', md:'13px', sm:'11px'}}
                                >
                                    <Text>
                                        Checking Date              :
                                    </Text>
                                    <Text>
                                        Username                   :
                                    </Text>
                                    <Text>
                                        Disease Prediction         :
                                    </Text>
                                    <Text>
                                        Similarity Percentage      :
                                    </Text>
                                    <Text>
                                        Checking Result            :
                                    </Text>
                                </Stack>
                            </Box>
                        </GridItem>
                    </Grid>   
            </Stack>
        </Box>
    )
}

export default CheckDNA;