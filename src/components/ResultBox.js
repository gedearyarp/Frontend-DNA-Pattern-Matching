import React from 'react'
import {
    Stack,
    Box,
    Text
} from '@chakra-ui/react';

function ResultBox({ cnumber, cname, cdisease, cdate, csimilarity, cverdict }) {
    const verdictColor = cverdict === 'Positive' ? '#6246ea' : '#e45858';

    return (
        <Box
            m="50px"
            p="1%"
            border="2px"
            borderColor={verdictColor}
            borderRadius={{ xl: '25px', lg: '20px', md: '15px', sm: '10px' }}
            h="auto"
        >
            <Stack
                spacing="0%"
                pos="relative"
            >
                <Text
                    align="center" pos="absolute" left={{ xl: '1%', lg: '0.7%', md: '0.4%', sm: '0%' }}
                    fontWeight="bold" fontSize={{ xl: '28px', lg: '17.5px', md: '14px', sm: '11px' }}
                >
                    {cnumber}
                </Text>
                <Stack
                    spacing="0%" pl="7%"
                    fontSize={{ xl: '15px', lg: '12px', md: '10px', sm: '8px' }}
                    color="#2b2c34"
                >
                    <Text
                        fontWeight="normal"
                        color="#515151"
                    >
                        {cname}
                    </Text>
                    <Text
                        fontSize={{ xl: '19px', lg: '16px', md: '12px', sm: '10px' }}
                        fontWeight="bold"
                    >
                        {cdisease}
                    </Text>
                    <Text
                        fontWeight="semibold"
                        color="#515151"
                    >
                        {cdate}
                    </Text>
                </Stack>
                <Stack
                    spacing="0%"
                    pos="absolute"
                    right="1.5%"
                >
                    <Text
                        fontWeight="medium"
                        alignSelf="flex-end"
                        fontSize={{ xl: '15px', lg: '12px', md: '10px', sm: '8px' }}
                    >
                        {csimilarity}% Similarity
                    </Text>
                    <Text
                        fontWeight="bold"
                        alignSelf="flex-end"
                        color={verdictColor}
                        fontSize={{ xl: '19px', lg: '16px', md: '12px', sm: '10px' }}
                    >
                        {cverdict}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ResultBox;