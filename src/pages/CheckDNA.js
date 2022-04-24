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
    Spacer,
    Text,

} from '@chakra-ui/react';

function CheckDNA() {
    return (

        <Box>
            {/* HEADER -> NAVBAR */}
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header />
            </Box>
            
            {/* CONTENT */}
            <Stack  pr="10%" pl="10%" pt="3%" h="87vh">

                {/* TEXT LANDING */}
                <Box pb="1%">
                    <Text fontWeight="bold" fontSize="4xl" align="center" borderBottom="1px" borderColor="#E45858" W="10px">
                        DNA TESTING
                    </Text>
                </Box>

                {/* Input */}
                <Box h="40%">
                    <Stack d="flex" flexDir="row" alignItems="center" justifyContent="center">
                        <Box w='30%'>
                            <Text align="center" fontWeight="bold" fontSize="2xl" pb="4px">
                                Username
                            </Text>
                            <Input border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%" bg="#D1D1E9" variant='filled' placeholder="Input Your Username" textAlign="center" />
                        </Box>
                        <Spacer />
                        <Box w='30%'>
                            <Text align="center" fontWeight="bold" fontSize="2xl" pb="4px">
                                User Sequence DNA
                            </Text>
                            <Button border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%" bg="#D1D1E9">Upload File...</Button>
                        </Box>
                        <Spacer />
                        <Box w='30%'>
                            <Text align="center" fontWeight="bold" fontSize="2xl" pb="4px">
                                Disease Prediction
                            </Text>
                            <Select border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%" bg="#D1D1E9" variant='filled' placeholder="Choose Disease" />
                        </Box>
                    </Stack>
                    
                    {/* Submit Button */}
                    <Box>
                        <Center pt="7%">
                            <Button w="30%" bg="#6246EA" border='4px' borderColor="#2B2C34" borderRadius='30px'>
                                <Text color="#FFFFFE" fontSize="21px" m={3}>
                                    Submit
                                </Text>
                            </Button>
                        </Center>
                    </Box>
                </Box>
                
                
                {/* Result */}
                <Box px="2%" border="2px" h="60%" borderRadius="10%">
                    <Stack p="3%" spacing="2%">
                        <Text>
                            Checking Date          :
                        </Text>
                        <Text>
                            Username               :
                        </Text>
                        <Text>
                            Disease Prediction     :
                        </Text>
                        <Text>
                            Similarity Percentage  :
                        </Text>
                        <Text>
                            Checking Result        :
                        </Text>
                        
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}


export default CheckDNA;