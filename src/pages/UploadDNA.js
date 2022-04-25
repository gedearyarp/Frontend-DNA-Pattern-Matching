import React from 'react';
import Header from '../components/Header'
import {
    Stack,
    Input,
    Button,
    Center,
    Box,
    Text,
    Grid,
    GridItem,

} from '@chakra-ui/react';

// eslint-disable-next-line
const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

function UploadDNA() {
    return (

        <Box>
            {/* HEADER -> NAVBAR */}
            
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Upload'/>
            </Box>
            
            {/* CONTENT */}
            <Stack  pr="10%" pl="10%" pt="3%" h="87vh">

                {/* TEXT LANDING */}
                <Center>
                    <Box pb="5%">
                        <Text
                            fontWeight="bold" 
                            w="auto" 
                            fontSize={{xl:'36px', lg:'33px', md:'29px', sm:'24px'}} 
                            borderBottom="2px" 
                            borderColor="#E45858" 
                            W="10px"
                        >
                            NEW DISEASE UPLOAD
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
                        <GridItem colSpan={1} />
                        <GridItem colSpan={5}>
                            <Text
                                align="center" 
                                fontWeight="bold" 
                                fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} 
                                pb="4px"
                            >
                                Disease Name
                            </Text>
                        </GridItem>
                        <GridItem colSpan={2}/>
                        <GridItem colSpan={5}>
                            <Text
                                align="center" 
                                fontWeight="bold" 
                                fontSize={{xl:'25px', lg:'24px', md:'20px', sm:'15px'}} 
                                pb="4px"
                            >
                                Disease Sequence DNA
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1} />

                        {/* Row 2 : Button & Space */}
                        <GridItem colSpan={1} />
                        <GridItem colSpan={5}>
                            <Input
                                py="20px" 
                                border={{md:'4px', sm:'2px'}} 
                                borderColor="#2B2C34" 
                                borderRadius='30px'
                                w="100%" 
                                bg="#D1D1E9" 
                                variant='filled' 
                                color="#515151"
                                placeholder="Disease name here" 
                                textAlign="center" 
                                fontWeight="normal"
                                fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'9px'}} 
                            />
                        </GridItem>
                        <GridItem colSpan={2} />
                        <GridItem colSpan={5}>
                            <Button
                                py="20px" 
                                border={{md:'4px', sm:'2px'}} 
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
                        
                        {/* Submit Button */}
                        <GridItem colSpan={14} pt="6%">
                            <Center
                                pt="2.5%" 
                                pb="2%"
                            >
                                <Button
                                    py="20px" 
                                    h="60px"
                                    w="25%" 
                                    bg="#6246EA" 
                                    border={{md:'4px', sm:'2px'}} 
                                    borderColor="#2B2C34" 
                                    borderRadius='30px'
                                >
                                    <Text
                                        color="#FFFFFE" 
                                        fontSize={{xl:'21px', lg:'15.5px', md:'11px', sm:'7'}} 
                                        m={4}
                                    >
                                        SUBMIT
                                    </Text>
                                </Button>
                            </Center>
                        </GridItem>
                    </Grid>
                
            </Stack>
        </Box>
    )
}

export default UploadDNA;