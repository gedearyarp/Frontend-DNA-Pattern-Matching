import React from 'react';
import Header from '../components/Header'
import {
    // Flex,
    Stack,
    Input,
    Button,
    Center,
    Box,
    Spacer,
    Text,

} from '@chakra-ui/react';

function SearchDNA() {
    return (

        <Box>
            {/* HEADER -> NAVBAR */}
            
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Search'/>
            </Box>
            
            {/* CONTENT */}
            <Stack  pr="10%" pl="10%" pt="7%" h="87vh">

                {/* TEXT LANDING */}
                <Box pb="5%">
                    <Text fontWeight="bold" fontSize="4xl" align="center" borderBottom="1px" borderColor="#E45858" W="10px">
                        NEW DISEASE UPLOAD
                    </Text>
                </Box>

                {/* Input */}
                <Box h="40%">
                    <Stack d="flex" flexDir="row" alignItems="center" justifyContent="center">
                        <Spacer />
                        <Box w='30%'>
                            <Text align="center" fontWeight="bold" fontSize="2xl" pb="4px">
                                Disease Name
                            </Text>
                            <Input border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%" bg="#D1D1E9" variant='filled' placeholder="Input Your Username" textAlign="center" />
                        </Box>
                        <Spacer />
                        <Box w='30%'>
                            <Text align="center" fontWeight="bold" fontSize="2xl" pb="4px">
                                Disease Sequence DNA
                            </Text>
                            <Button border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%" bg="#D1D1E9">Upload File...</Button>
                        </Box>
                        <Spacer />
                    </Stack>
                    
                    {/* Submit Button */}
                    <Box>
                        <Center pt="10%">
                            <Button w="30%" bg="#6246EA" border='4px' borderColor="#2B2C34" borderRadius='30px'>
                                <Text color="#FFFFFE" fontSize="21px" m={3}>
                                    Submit
                                </Text>
                            </Button>
                        </Center>
                    </Box>
                </Box>
                
            </Stack>
        </Box>
    )
}

export default SearchDNA;