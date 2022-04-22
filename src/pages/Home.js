import React from 'react';
import {
    Center,
    Stack,
    Box,
    Image,
    Text,
    Button,
    Spacer,
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
} from '@chakra-ui/icons'


function Home() {
    return (
        <Center  bg="#FFFFFE">
            <Stack>
                {/* LOGO WEBSITE */}
                <Box p="20">
                    <Image src="../images/DNAr" maxW="10px" mx="auto" />
                </Box>

                {/* LANDING TEXT */}
                <Box>
                    <Text fontSize="4xl" align="center" fontWeight="bold" color="#2B2C34" mb={6}>
                        Identify Your Disease <br></br>
                        With DNAmatch
                    </Text>
                </Box>

                {/* BUTTONS */}
                <Box>
                    <Center>
                        <Stack mb={20}>
                            <Button bg="#E45858" border='2px' borderColor="#2B2C34" borderRadius='30px' w="25vw">
                                <Text color="#FFFFFE" fontSize="18px" m="3">
                                    Test Your DNA
                                </Text>
                                <Spacer />
                                <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                            </Button>

                            <Button bg="#6246EA" border='2px' borderColor="#2B2C34" borderRadius='30px' w="25vw">
                                <Text color="#FFFFFE" fontSize="18px" m={3}>
                                    Search History
                                </Text>
                                <Spacer />
                                <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                            </Button>

                            <Button bg="#6246EA" border='2px' borderColor="#2B2C34" borderRadius='30px' w="25vw">
                                <Text color="#FFFFFE" fontSize="18px" m={3}>
                                    Upload DNA Disease
                                </Text>
                                <Spacer />
                                <ArrowForwardIcon color="#FFFFFE" w={6} h={6}/>
                            </Button>
                        </Stack>
                    </Center>
                </Box>

                {/* Watermark */}
                <Box>
                    <Text align="center" >
                        © 2022 prasmanan. <br></br>
                        This site created to fulfill the tubes stima 3.
                    </Text>
                </Box>
            </Stack>
            
            
        </Center>
    )
}

export default Home;