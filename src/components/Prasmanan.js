import { Box, HStack, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa';
import React from 'react'

function Prasmanan() {
    return (
        <Box   
            position="fixed" 
            bottom="15px"
            left="15px"
            fontSize={{ xl: '13px', lg: '10px', md: '8px', sm: '6px' }}
        >
            <HStack >
                <Text>
                    With
                </Text>
                <FaHeart color='#e45858'/>
            </HStack>
            <Text align="right">
                gedearya romy mike
            </Text>
        </Box>
    )
}

export default Prasmanan