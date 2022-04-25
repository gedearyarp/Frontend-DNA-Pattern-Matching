import React from 'react';
import dnaLogo from '../images/dnalogoresize.png';
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';
import {
    Center,
    Stack,
    Box,
    Image,
    Text,
    Flex,
} from '@chakra-ui/react';
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <Flex
            w="100%"
            bg="#FFFFFE"
            alignItems="center"
            justifyContent="center"
        >
            <Stack
                d="flex"
                flexDir="column"
                h="90vh"
                alignItems="center"
                justifyContent="center"
            >
                <Box>
                    <Image
                        src={dnaLogo}
                        height="20vh"
                        mx="auto"
                        alt='DNA Prasmanan Logo'
                    />
                </Box>
                <Box>
                    <Text
                        fontSize="5xl"
                        align="center"
                        fontWeight="bold"
                        color="#2B2C34"
                        mb={6}
                    >
                        Identify Your Disease <br />
                        With DNAmatch
                    </Text>
                </Box>
                <Box>
                    <Center>
                        <Stack spacing="15px">
                            <Link to="/check-dna">
                                <HomeButton ctext="Test Your DNA" ccolor="#E45858" />
                            </Link>

                            <Link to="/search-dna">
                                <HomeButton ctext="Search History" ccolor="#6246EA" />
                            </Link>

                            <Link to="/upload-dna">
                                <HomeButton ctext="Upload DNA Disease" ccolor="#6246EA" />
                            </Link>
                        </Stack>
                    </Center>
                </Box>
                <Box>
                    <Footer />
                </Box>
            </Stack>


        </Flex>
    )
}

export default Home;