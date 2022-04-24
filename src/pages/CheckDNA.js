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
                <Box pb="2%">
                    <Text fontWeight="bold" fontSize={{xl:'36px', lg:'33px', md:'29px', sm:'24px'}} align="center" borderBottom="1px" borderColor="#E45858" W="10px">
                        DNA TESTING
                    </Text>
                </Box>

                {/* Input */}

                    <Grid gap={1} templateColumns="repeat(14,1fr)" templateRows="repeat(1,1fr)" >
                        {/* Row 1 : Text */}
                        <GridItem colSpan={4}>
                            <Text align="center" fontWeight="bold" fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} pb="4px">
                                Username
                            </Text>
                        </GridItem>
                            <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Text align="center" fontWeight="bold" fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} pb="4px">
                                User Sequence DNA
                            </Text>
                        </GridItem>
                            <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Text align="center" fontWeight="bold" fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} pb="4px">
                                Disease Prediction
                            </Text>
                        </GridItem>

                        {/* Row 2 : Button & Space */}
                        <GridItem colSpan={4}>
                            <Input
                                border='4px' borderColor="#2B2C34" borderRadius='30px'
                                w="100%" bg="#D1D1E9" variant='filled'
                                placeholder="Input Your Username" textAlign="center"
                                fontSize={{xl:'18px', lg:'15.5px', md:'11px', sm:'9px'}} />
                        </GridItem>
                            <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Button 
                                border='4px' borderColor="#2B2C34" borderRadius='30px'
                                w="100%" bg="#D1D1E9"
                                fontSize={{xl:'18px', lg:'15.5px', md:'11px', sm:'9px'}}>
                                Upload File...
                            </Button>
                        </GridItem>
                            <GridItem colSpan={1} />
                        <GridItem colSpan={4}>
                            <Select
                                border='4px' borderColor="#2B2C34" borderRadius='30px'
                                w="100%" bg="#D1D1E9" variant='filled' placeholder="Choose Disease"
                                fontSize={{xl:'18px', lg:'15.5px', md:'11px', sm:'9px'}} /> 
                        </GridItem>
                        
                        {/* Submit Button */}
                        <GridItem colSpan={14}>
                            <Center pt="2.5%" pb="2%">
                                <Button w="30%" bg="#6246EA" border='4px' borderColor="#2B2C34" borderRadius='30px'>
                                    <Text color="#FFFFFE" fontSize={{xl:'18px', lg:'15.5px', md:'11px', sm:'7'}} m={4}>
                                        Submit
                                    </Text>
                                </Button>
                            </Center>
                        </GridItem>

                        {/* Result */}
                        <GridItem colSpan={14}>
                            <Box p="2.5%" px="3%" border="2px" h="auto" borderRadius="10%">
                                <Stack spacing="1%" fontSize={{xl:'18px', lg:'15.5px', md:'13px', sm:'11px'}}>
                                    <pre>
                                        Checking Date              :
                                    </pre>
                                    <pre>
                                        Username                   :
                                    </pre>
                                    <pre>
                                        Disease Prediction         :
                                    </pre>
                                    <pre>
                                        Similarity Percentage      :
                                    </pre>
                                    <pre>
                                        Checking Result            :
                                    </pre>
                                </Stack>
                                
                                
                            </Box>
                        </GridItem>
                    </Grid>
                    
                    
                    <Box>
                        
                    </Box>
                
                
                
                    
            </Stack>
        </Box>
    )
}


export default CheckDNA;