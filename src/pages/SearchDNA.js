import React, {useState} from 'react';
import Header from '../components/Header'
import SubmitButton from '../components/SubmitButton';
import ResultBox from '../components/ResultBox';
import Title from '../components/Title';
import {
    Stack,
    Input,
    Center,
    Box,
    Text,
    Grid,
    GridItem,
    HStack
} from '@chakra-ui/react';

function UploadDNA() {
    const [searchInput, setSearchInput] = useState("");
    return (
        <Box>
            <Box 
                borderBottom="1px" 
                borderColor="#2B2C34"
            >
                <Header currentPage='Search' />
            </Box>
            <Stack 
                pr="10%" 
                pl="10%" 
                t="3%" 
                h="87vh"
            >
                <Center>
                    <Title text="SEARCH TEST HISTORY" />
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
                            onChange={(e) => setSearchInput(e.target.value)}
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
                            <SubmitButton text="SEARCH" />
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
                <ResultBox number="1" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
                <ResultBox number="2" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Negative" />
                <ResultBox number="3" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Negative" />
                <ResultBox number="4" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
                <ResultBox number="5" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
                <ResultBox number="6" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
                <ResultBox number="7" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
                <ResultBox number="8" name="Kevin Julio" disease="Cancer Cervix" date="17 Januari 2022" similarity="88" verdict="Positive" />
            </Stack>
        </Box>
    )
}

export default UploadDNA;