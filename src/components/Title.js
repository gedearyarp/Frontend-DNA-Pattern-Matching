import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react';

function Title({ ctext }) {
    return (
        <Box pb="1.5%">
            <Text
                fontWeight="bold"
                w="auto"
                fontSize={{ xl: '36px', lg: '33px', md: '29px', sm: '24px' }}
                borderBottom="2px"
                borderColor="#E45858"
                W="10px"
            >
                {ctext}
            </Text>
        </Box>
    )
}

export default Title;