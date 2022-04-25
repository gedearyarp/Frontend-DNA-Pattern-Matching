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
                <Header currentPage='Search'/>
            </Box>
            
            {/* CONTENT */}
            <Stack  pr="10%" pl="10%" pt="2%" h="87vh">

                {/* TEXT LANDING */}
                <Center>
                    <Box pb="1.5%">
                        <Text
                            fontWeight="bold" 
                            w="auto" 
                            fontSize={{xl:'36px', lg:'33px', md:'29px', sm:'24px'}} 
                            borderBottom="2px" 
                            borderColor="#E45858" 
                            W="10px"
                        >
                            TEST History
                        </Text>
                    </Box>
                </Center>

                {/* Input */}
                <Grid
                    gap={1} 
                    templateColumns="repeat(14,1fr)" 
                    templateRows="repeat(1,1fr)" 
                >

                    {/* Row 2 : Button & Space */}
                    <GridItem colSpan={3} />
                    <GridItem colSpan={8} >
                        <Input
                            py="20px" 
                            border={{md:'4px', sm:'2px'}} 
                            borderColor="#2B2C34" 
                            borderRadius='30px'
                            w="100%" 
                            bg="#D1D1E9" 
                            variant='filled' 
                            color="#515151"
                            placeholder="keyword : date-disease     OR     date     OR     disease" 
                            textAlign="center" 
                            fontWeight="normal"
                            fontStyle="italic"
                            fontSize={{xl:'15px', lg:'11px', md:'9px', sm:'7px'}} />
                        <Center w="auto" px="3%" fontSize={{xl:'13.5px', lg:'10.5px', md:'8.5px', sm:'6.5px'}} >
                            <pre>
                                -------------------------------------- <br/>
                                | example : 14 April 2022-HIV     OR | <br/>
                                |           14 April 2022         OR | <br/>
                                |           HIV                      | <br/>
                                --------------------------------------
                            </pre>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={3} />
                    
                    {/* Search Button */}
                    <GridItem colSpan={14}>
                        <Center
                            pt="1%" 
                            pb="1%"
                        >
                            <Button
                                py="10px" 
                                h="50px"
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
                                    SEARCH
                                </Text>
                            </Button>
                        </Center>
                    </GridItem>
                </Grid>

                {/* SEARCH RESULT */}
                <Box pt="1%">
                    <Text
                        fontWeight="semibold" 
                        w="auto" 
                        fontSize={{xl:'30px', lg:'27px', md:'23px', sm:'18px'}} 
                        borderBottom="2px" 
                        borderColor="#E45858" 
                        W="10px"
                    >
                        Recent Test
                    </Text>
                </Box>
                <Box
                    p="1.2%" 
                    px="3.5%" 
                    border="2px"
                    borderColor="#6246EA"
                    borderRadius={{xl:'25px', lg:'20px', md:'15px', sm:'10px'}}
                    h="auto" 
                    mt="50px"
                    
                >
                    <Stack
                        spacing="0%" 
                        fontSize={{xl:'18px', lg:'15.5px', md:'13px', sm:'11px'}}
                        pos="relative"
                    >
                        <Text
                            pos="absolute" left="-2.2%" fontWeight="bold"
                            fontSize={{xl:'21px', lg:'18.5px', md:'15px', sm:'13px'}}
                        >
                            1
                        </Text>
                        <Text
                            as="u"
                            align="center" fontWeight="semibold"
                            fontSize={{xl:'19px', lg:'16.5px', md:'13px', sm:'11px'}}
                            fontStyle="italic"
                        >
                            14 April 2022 
                        </Text>
                        <Text>
                            Username                   : Jamal
                        </Text>
                        <Text>
                            Disease Prediction         : Kanker
                        </Text>
                        <Text>
                            Similarity Percentage      : 100%
                        </Text>
                        <Text>
                            Checking Result            : Positive
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default UploadDNA;