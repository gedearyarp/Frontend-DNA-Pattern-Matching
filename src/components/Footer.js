import React from 'react'
import {
    Center,
    Box,
    Text
} from '@chakra-ui/react';

function Footer() {
    return (
        <Center >
            <Box   
                position="fixed" 
                bottom="20px"
            >
                <Text align="center">
                    © 2022 prasmanan.
                </Text>
                <Text align="center">
                    This site created to fulfill the tubes stima 3.
                </Text>
            </Box>
        </Center>
    )
}

export default Footer;