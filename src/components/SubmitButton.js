import React from 'react'
import {
    Text,
    Button
} from '@chakra-ui/react';
function SubmitButton({ ctext }) {
    return (
        <Button
            py="20px"
            h="60px"
            w="25%"
            bg="#6246EA"
            border={{ md: '4px', sm: '2px' }}
            borderColor="#2B2C34"
            borderRadius='30px'
        >
            <Text
                color="#FFFFFE"
                fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '7' }}
                m={4}
            >
                {ctext}
            </Text>
        </Button>
    )
}

export default SubmitButton;