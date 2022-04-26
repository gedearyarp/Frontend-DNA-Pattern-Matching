import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

function SearchDNA() {
    const [searchInput, setSearchInput] = useState("");
    const [result, setResult] = useState([]);
    const [onLoading, setOnLoading] = useState(false);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const fetchAllHistory = async () => {
            setOnLoading(true);
            await axios.post(`https://be-prasmanan-stima-3.herokuapp.com/search?q=`)
                .then(res => {
                    setResult(res.data.data);
                })
            setOnLoading(false);
        }
        fetchAllHistory();
    }, []);

    const handleSearch = () => {
        const fetchHistory = async () => {
            setOnLoading(true);
            let q = searchInput.trim()
            await axios.post(`https://be-prasmanan-stima-3.herokuapp.com/search?q=${q}`)
                .then(res => {
                    setResult(res.data.data);
                })
            setOnLoading(false);
        }
        fetchHistory();
    }

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
                pt="3%"
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
                            placeholder="keyword : date disease     OR     date     OR     disease"
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
                                    14 April 2022 Flu, 17-04-2022, Batuk
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
                            <SubmitButton
                                text="SEARCH"
                                setValue={handleSearch}
                            />
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
                { !onLoading ? (
                    <>
                        {
                            result && result.map((item, index) => {
                                let tanggal = new Date(parseInt(item.tanggal));
                                const strTanggal = tanggal.getDate() + ' ' + (monthNames[tanggal.getMonth()]) + ' ' + tanggal.getFullYear();
                                return (
                                    <ResultBox
                                        number={index+1}
                                        name={item.namaPengguna}
                                        disease={item.namaPenyakit}
                                        date={strTanggal}
                                        similarity={item.similarity}
                                        verdict={item.status ? "Positive" : "Negative"}
                                    />
                                )
                            })
                        }
                    </>
                ) : (
                    <Center >
                        <Text
                            fontSize={{ xl: '30px', lg: '27px', md: '23px', sm: '18px' }}
                            color="#2b2c34"
                            fontWeight="semibold"
                        >
                            Fetching some data... Please wait...
                        </Text>
                    </Center>
                )}
            </Stack>
        </Box>
    )
}

export default SearchDNA;