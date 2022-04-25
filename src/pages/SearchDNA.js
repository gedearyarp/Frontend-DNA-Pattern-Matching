import React from 'react';
import Header from '../components/Header'
import {
    Stack,
    Input,
    Button,
    Center,
    Box,
    Text,
    Grid,
    GridItem,
    HStack,

} from '@chakra-ui/react';
import SubmitButton from '../components/SubmitButton';
import ResultBox from '../components/ResultBox';
import Title from '../components/Title';

// eslint-disable-next-line
const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

function UploadDNA() {
    return (
        <Box>
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Search' />
            </Box>
            <Stack pr="10%" pl="10%" pt="3%" h="87vh">
                <Center>
                    <Title ctext="SEARCH TEST HISTORY"/>
                </Center>
                <Grid
                    gap={1}
                    templateColumns="repeat(14,1fr)"
                    templateRows="repeat(1,1fr)"
                >
                    <GridItem colSpan={3} />
                    <GridItem colSpan={8} >
                        <Input
                            py="20px"
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            w="100%"
                            bg="#D1D1E9"
                            variant='filled'
                            color="#515151"
                            placeholder="keyword : date-disease     OR     date     OR     disease"
                            textAlign="center"
                            fontWeight="normal"
                            fontStyle="italic"
                            fontSize={{ xl: '15px', lg: '11px', md: '9px', sm: '7px' }} 
                        />
                        <Center mt="6px">
                            <HStack >
                                <Text color="#6246ea">
                                    Example:
                                </Text>
                                <Text color="#2b2c34">
                                    14 Juni 2020 - Flu, 17-08-2022, Batuk Pilek
                                </Text>
                            </HStack>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={3} />
                    <GridItem colSpan={14}>
                        <Center
                            pt="1%"
                            pb="1%"
                        >
                            <SubmitButton ctext="SEARCH"/>
                        </Center>
                    </GridItem>
                </Grid>
                <Box py="1%">
                    <Text
                        fontWeight="semibold"
                        w="auto"
                        fontSize={{ xl: '30px', lg: '27px', md: '23px', sm: '18px' }}
                        borderBottom="2px"
                        borderColor="#E45858"
                        W="10px"
                    >
                        <HStack>
                            <Text color="#6246ea">
                                Recent
                            </Text>
                            <Text color="#2b2c34">
                                Test
                            </Text>
                        </HStack>
                    </Text>
                </Box>
                <ResultBox cnumber="1" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="2" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="3" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="4" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="5" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="6" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="7" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="8" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="9" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
                <ResultBox cnumber="10" cname="Kevin Julio" cdisease="Cancer Cervix" cdate="17 Januari 2022" csimilarity="88" cverdict="Positive"/>
            </Stack>
        </Box>
    )
}

export default UploadDNA;