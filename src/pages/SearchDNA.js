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
                            TEST HISTORY
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

                {/* RECENT RESULT */}
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

                {/* SEARCH RESULT */}
                <Box
                    p="1%" 
                    border="2px"
                    borderColor="#6246EA"
                    borderRadius={{xl:'25px', lg:'20px', md:'15px', sm:'10px'}}
                    h="auto" 
                >
                    <Stack
                        spacing="0%" 
                        pos="relative"
                    >   
                        {/* NUMBER */}
                        <Text
                            lineHeight={{xl:'39px', lg:'36px', md:'29px', sm:'24px'}}
                            w={{xl:'40px', lg:'37px', md:'30px', sm:'25px'}}
                            h={{xl:'40px', lg:'37px', md:'30px', sm:'25px'}}
                            borderRadius={{xl:'40px', lg:'37px', md:'30px', sm:'25px'}}
                            border="2px" align="center" pos="absolute" left={{xl:'1%', lg:'0.7%', md:'0.4%', sm:'0%'}}
                            fontWeight="bold" fontSize={{xl:'20px', lg:'17.5px', md:'14px', sm:'11px'}}
                        >
                            777
                        </Text>

                        {/* RESULT CONTENT */}
                        <Stack
                            spacing="0%" pl="7%"
                            fontSize={{xl:'15px', lg:'12px', md:'10px', sm:'8px'}}
                            color="#2b2c34"
                        >
                            <Text
                                fontWeight="normal"
                            >
                                Jamaludin Siregar
                            </Text>
                            <Text
                                fontSize={{xl:'19px', lg:'16px', md:'12px', sm:'10px'}}
                                fontWeight="bold"
                            >
                                Cancer Cervix
                            </Text>
                            <Text
                                fontWeight="semibold"
                                fontStyle="italic"
                                color="#606985"
                            >
                                14 April 2022 
                            </Text>
                        </Stack>
                        <Stack
                            spacing="0%"
                            pos="absolute" right="10%"
                            pt="1.2%"
                            fontSize={{xl:'16px', lg:'13px', md:'10px', sm:'8px'}}
                        >
                            <Text
                                fontWeight="semibold"
                                color={{md:"#6246EA", sm:"#E45858"}} // Ganti ini jadi if positive : #6246EA, if neg : #E45858
                            >
                                Positive
                            </Text>
                            <Text>
                                88%
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default UploadDNA;