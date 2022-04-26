import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SubmitButton from '../components/SubmitButton';
import Title from '../components/Title';
import Header from '../components/Header'
import {
    Stack,
    Input,
    Button,
    Select,
    Center,
    Box,
    Text,
    Grid,
    GridItem,
    HStack
} from '@chakra-ui/react';

function CheckDNA() {
    const [name, setName] = useState("");
    const [diseaseList, setDiseaseList] = useState([]);
    const [disease, setDisease] = useState("");
    
    useEffect(() => {
        axios.get(`https://be-prasmanan-stima-3.herokuapp.com/penyakit`)
            .then(res => {
                setDiseaseList(res.data.data);
            })
    }, []);

    const handleDiseaseSelect = (e) => {
        setDisease(e.target.value)
    }

    return (
        <Box>
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Test' />
            </Box>
            <Stack pr="10%" pl="10%" pt="3%" h="87vh">
                <Center>
                    <Box pb="2%">
                        <Title text="DNA TESTING"/>
                    </Box>
                </Center>
                <Grid
                    gap={1}
                    templateColumns="repeat(14,1fr)"
                    templateRows="repeat(1,1fr)"
                >
                    <GridItem colSpan={4}>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontSize={{ xl: '25px', lg: '24px', md: '20px', sm: '15px' }}
                            pb="4px"
                        >
                            Username
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={4}>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontSize={{ xl: '25px', lg: '24px', md: '20px', sm: '15px' }}
                            pb="4px"
                        >
                            User Sequence DNA
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={4}>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontSize={{ xl: '25px', lg: '24px', md: '20px', sm: '15px' }}
                            pb="4px"
                        >
                            Disease Prediction
                        </Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <Input
                            py="20px"
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            w="100%"
                            bg="#D1D1E9"
                            variant='filled'
                            placeholder="Your name here"
                            textAlign="center"
                            fontWeight="normal"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={4}>
                        <Button
                            py="20px"
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            w="100%"
                            bg="#D1D1E9"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                        >
                            <Text color="#515151" m="3" fontStyle="italic" fontWeight="normal">
                                Upload file
                            </Text>
                        </Button>
                        <Text
                            fontSize={{ xl: '17px', lg: '14px', md: '11px', sm: '9px' }}
                            mt="5px"
                        >
                            *Only .txt file
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={4}>
                        <Select
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            h="100%"
                            w="100%"
                            bg="#E45858"
                            variant='filled'
                            placeholder="Choose Disease"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            onChange={handleDiseaseSelect}
                        >
                            {
                                diseaseList.map((disease, index) => {
                                    return (
                                        <option value={disease.namaPenyakit}>{disease.namaPenyakit}</option>
                                    )
                                })
                            }
                        </Select>
                        <Text
                            fontSize={{ xl: '17px', lg: '14px', md: '11px', sm: '9px' }}
                            mt="5px"
                        >
                            *If the disease cannot be found, please upload the disease's DNA sequence beforehand.
                        </Text>
                    </GridItem>

                    {/* Submit Button */}
                    <GridItem colSpan={14}>
                        <Center
                            pt="2.5%"
                            pb="2%"
                        >
                            <SubmitButton text="SUBMIT"/>
                        </Center>
                    </GridItem>

                    {/* Result */}
                    <GridItem colSpan={14}>
                        <Box >
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
                                        Test
                                    </Text>
                                    <Text color="#2b2c34">
                                        Result
                                    </Text>
                                </HStack>
                            </Text>
                        </Box>
                        <Box
                            py="2.5%"
                            px="3%"
                            border={{ md: '2px', sm: '1px' }}
                            h="auto"
                            borderRadius={{ xl: '25px', lg: '20px', md: '15px', sm: '10px' }}
                            mt="20px"
                        >
                            <Stack 
                                spacing="1%"
                                fontSize={{ xl: '18px', lg: '15.5px', md: '13px', sm: '11px' }}
                            >
                                <Text>
                                    Checking Date              :
                                </Text>
                                <Text>
                                    Username                   :
                                </Text>
                                <Text>
                                    Disease Prediction         :
                                </Text>
                                <Text>
                                    Similarity Percentage      :
                                </Text>
                                <Text>
                                    Checking Result            :
                                </Text>
                            </Stack>
                        </Box>
                    </GridItem>
                </Grid>
            </Stack>
        </Box>
    )
}

export default CheckDNA;