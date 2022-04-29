import React, { useState, useEffect, useRef } from 'react';
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
    HStack,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    AlertDialogCloseButton
} from '@chakra-ui/react';
import {GoAlert} from 'react-icons/go';
import convertTanggal from '../util/ConvertTanggal';
import HistoryBox from '../components/HistoryBox';
import Footer from '../components/Footer';
import Prasmanan from '../components/Prasmanan';

function CheckDNA() {
    const textInputRef = useRef();
    const [name, setName] = useState(null);
    const [diseaseList, setDiseaseList] = useState([]);
    const [disease, setDisease] = useState(null);
    const [txtFile, setTxtFile] = useState(null);
    const [txtString, setTxtString] = useState(null);
    const [result, setResult] = useState(null);
    const [onLoading, setOnLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [alertMessage, setAlertMessage] = useState(null);

    useEffect(() => {
        axios.get(`https://be-prasmanan-v2.vercel.app/penyakit`)
            .then(res => {
                setDiseaseList(res.data.data);
            })
    }, []);

    const handleDiseaseSelect = (e) => {
        setDisease(e.target.value)
    }

    const onChangeText = (e) => {
        e.preventDefault();
        setTxtFile(e.target.files[0]);
        const exampleFileReader = new FileReader();
        exampleFileReader.onload = async (e) => {
            const text = (e.target.result);
            setTxtString(text.trim());
        };
        exampleFileReader.readAsText(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        if (name === null || name === '') {
            setAlertMessage('Please input your name');
            setOnLoading(false);
            onOpen();
            return;
        }
        if (disease === null) {
            setAlertMessage('Please input your disease prediction');
            setOnLoading(false);
            onOpen();
            return;
        }
        if (txtString === null || txtFile === null) {
            setAlertMessage('Please input your dna sequence');
            setOnLoading(false);
            onOpen();
            return;
        }

        const fetchResult = async () => {
            setOnLoading(true);
            const params = {
                namaPengguna: name,
                namaPenyakit: disease,
                sequenceDNA: txtString
            };

            try {
                await axios.post(`https://be-prasmanan-v2.vercel.app/dna/test`, params)
                    .then(res => {
                        setResult(res.data.data);
                    });
            }
            catch (err) {
                if (err.response.data.message === 'Invalid DNA sequence') {
                    setAlertMessage('Your DNA sequence is invalid');
                } else {
                    setAlertMessage('Something went wrong');
                }
                onOpen();
            }
            setOnLoading(false);
        }

        fetchResult();
    }

    return (
        <Box>
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Test' />
            </Box>
            <Stack pr="10%" pl="10%" pt="3%" h="87vh">
                <Center>
                    <Box pb="2%">
                        <Title text="DNA TESTING" />
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
                        <input
                            type="file"
                            accept=".txt"
                            style={{ display: 'none' }}
                            onChange={onChangeText}
                            ref={textInputRef}
                        />
                        <Button
                            py="20px"
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            borderStyle="dotted"
                            w="100%"
                            bg="#D1D1E9"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            onClick={(e) => {
                                e.preventDefault();
                                textInputRef.current.click();
                            }}
                        >
                            <Text color="#515151" m="3" fontStyle="italic" fontWeight="normal" >
                                Upload file
                            </Text>
                        </Button>
                        <AlertDialog
                            motionPreset='slideInBottom'
                            onClose={onClose}
                            isOpen={isOpen}
                            isCentered
                        >
                            <AlertDialogOverlay />

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <HStack>
                                        <GoAlert color="#e45858"/> 
                                        <Text>
                                            Invalid Input!
                                        </Text>
                                    </HStack>
                                </AlertDialogHeader>
                                <AlertDialogCloseButton />
                                <AlertDialogBody>
                                    {alertMessage}
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button onClick={onClose} background='#e45858' color="#fffffe">
                                        Back to page
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        {
                            txtFile && txtFile.name ? (
                                <Text
                                    fontSize={{ xl: '17px', lg: '14px', md: '11px', sm: '9px' }}
                                    mt="5px"
                                    color="#6246ea"
                                >
                                    {txtFile.name}
                                </Text>
                            ) : (
                                <Text
                                    fontSize={{ xl: '17px', lg: '14px', md: '11px', sm: '9px' }}
                                    mt="5px"
                                >
                                    *Only .txt file
                                </Text>
                            )
                        }
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
                                diseaseList.map((dis) => {
                                    return (
                                        <option value={dis.namaPenyakit}>{dis.namaPenyakit}</option>
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
                    <GridItem colSpan={14}>
                        <Center
                            pt="2.5%"
                            pb="2%"
                        >
                            <SubmitButton
                                text="SUBMIT"
                                setValue={handleSubmit}
                            />
                        </Center>
                    </GridItem>
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
                        {
                            onLoading ? (
                                <Center py="2%">
                                    <Text
                                        fontSize={{ xl: '30px', lg: '27px', md: '23px', sm: '18px' }}
                                        color="#2b2c34"
                                        fontWeight="semibold"
                                    >
                                        Calculating your test result... Please wait...
                                    </Text>
                                </Center>
                            ) : (
                                result ? (
                                    <HistoryBox
                                        number="NEW"
                                        name={result.namaPengguna}
                                        disease={result.namaPenyakit}
                                        date={convertTanggal(parseInt(result.tanggal))}
                                        similarity={result.similarity}
                                        verdict={result.status ? "Positive" : "Negative"}
                                    />
                                ) : (
                                    <Box
                                        m="50px"
                                        p="1%"
                                        border="5px"
                                        borderColor="#2b2c34"
                                        borderRadius={{ xl: '25px', lg: '20px', md: '15px', sm: '10px' }}
                                        borderStyle="dotted"
                                        h="auto"
                                    >
                                        <Center py="2%">
                                        <Text
                                            fontSize={{ xl: '35px', lg: '27px', md: '23px', sm: '18px' }}
                                            color="#2b2c34"
                                            fontWeight="semibold"
                                        >
                                            Your test result will be displayed here!
                                        </Text>
                                    </Center>
                                    </Box>
                                    
                                )
                            )
                        }
                    </GridItem>
                </Grid>
                <Footer/>
            </Stack>
            <Prasmanan/>
        </Box>
    )
}

export default CheckDNA;