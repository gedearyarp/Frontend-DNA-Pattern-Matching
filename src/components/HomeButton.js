import React from 'react'
import {
    Text,
    Button,
    Spacer
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
} from '@chakra-ui/icons'

function HomeButton({ ctext, ccolor }) {
    return (
        <Button px="25px" py="20px" bg={ccolor} border='4px' borderColor="#2B2C34" borderRadius='30px' w="100%">
            <Text color="#FFFFFE" fontSize="21px" m="3">
                {ctext}
            </Text>
            <Spacer />
            <ArrowForwardIcon color="#FFFFFE" w={6} h={6} />
        </Button>
    )
}

export default HomeButton;