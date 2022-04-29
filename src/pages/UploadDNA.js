import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import SubmitButton from '../components/SubmitButton';
import Title from '../components/Title';
import axios from 'axios';
import {GoAlert} from 'react-icons/go';
import {
    Stack,
    Input,
    Button,
    Center,
    Box,
    Text,
    Grid,
    GridItem,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    AlertDialogCloseButton,
    HStack
} from '@chakra-ui/react';
import Prasmanan from '../components/Prasmanan';
import Footer from '../components/Footer';

function UploadDNA() {
    const textInputRef = useRef();
    const [disease, setDisease] = useState("");
    const [txtFile, setTxtFile] = useState(null);
    const [txtString, setTxtString] = useState(null);
    const [alertTitle, setAlertTitle] = useState("Invalid Input!");
    const [alertMessage, setAlertMessage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        if (disease === null || disease === "") {
            setAlertTitle("Invalid Input!");
            setAlertMessage("Disease name cannot be empty");
            onOpen();
            return;
        }

        if (txtString === null || txtString === "" || txtFile === null) {
            setAlertTitle("Invalid Input!");
            setAlertMessage('Please input disease\' dna sequence');
            onOpen();
            return;
        }

        const sendDisease = async () => {
            const params = {
                namaPenyakit: disease,
                sequenceDNA: txtString
            };

            try {
                await axios.post(`https://be-prasmanan-stima-3.herokuapp.com/penyakit/add`, params)
                    .then(() => {
                        setAlertTitle("Success!");
                        setAlertMessage("Successfully added disease data")
                        onOpen();
                    });
            }
            catch (err) {
                if (err.response.data.message === 'Invalid DNA sequence') {
                    setAlertTitle("Invalid Input!");
                    setAlertMessage('Your DNA sequence is invalid');
                } else {
                    setAlertTitle("Invalid Input!");
                    setAlertMessage('Something went wrong');
                }
                onOpen()
            }
        }
        sendDisease();
    }

    return (
        <Box>
            <Box borderBottom="1px" borderColor="#2B2C34">
                <Header currentPage='Upload' />
            </Box>
            <Stack
                pr="10%"
                pl="10%"
                pt="3%"
                h="87vh"
            >
                <Center>
                    <Box pb="5%">
                        <Title text="NEW DISEASE UPLOAD" />
                    </Box>
                </Center>
                <Grid
                    gap={1}
                    templateColumns="repeat(14,1fr)"
                    templateRows="repeat(1,1fr)"
                >
                    <GridItem colSpan={1} />
                    <GridItem colSpan={5}>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontSize={{ xl: '25px', lg: '24px', md: '20px', sm: '15px' }}
                            pb="4px"
                        >
                            Disease Name
                        </Text>
                    </GridItem>
                    <GridItem colSpan={2} />
                    <GridItem colSpan={5}>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontSize={{ xl: '25px', lg: '24px', md: '20px', sm: '15px' }}
                            pb="4px"
                        >
                            Disease Sequence DNA
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1} />

                    {/* Row 2 : Button & Space */}
                    <GridItem colSpan={1} />
                    <GridItem colSpan={5}>
                        <Input
                            py="20px"
                            border={{ md: '4px', sm: '2px' }}
                            borderColor="#2B2C34"
                            borderRadius='30px'
                            w="100%"
                            bg="#e45858"
                            fontColor="#fffffe"
                            variant='filled'
                            placeholder="Disease name here"
                            textAlign="center"
                            fontWeight="normal"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            onChange={(e) => setDisease(e.target.value)}
                        />
                    </GridItem>
                    <GridItem colSpan={2} />
                    <GridItem colSpan={5}>
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
                            w="100%"
                            bg="#D1D1E9"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            onClick={(e) => {
                                e.preventDefault();
                                textInputRef.current.click();
                            }}
                        >
                            <Text color="#515151" m="3" fontStyle="italic" fontWeight="normal">
                                Upload file
                            </Text>
                        </Button>
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

                    {/* Submit Button */}
                    <GridItem colSpan={14} pt="6%">
                        <Center
                            pt="2.5%"
                            pb="2%"
                        >
                            <SubmitButton text="SUBMIT" setValue={handleSubmit}/>
                            <AlertDialog
                                motionPreset='slideInBottom'
                                onClose={onClose}
                                isOpen={isOpen}
                                isCentered
                            >
                                <AlertDialogOverlay />

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        {
                                            alertTitle === "Invalid Input!" ? 
                                            (
                                                <HStack>
                                                    <GoAlert color="#e45858"/> 
                                                    <Text>
                                                        {alertTitle}
                                                    </Text>
                                                </HStack>
                                            ) : (
                                                <Text>
                                                    {alertTitle}
                                                </Text>
                                            )
                                        } 
                                        
                                    </AlertDialogHeader>
                                    <AlertDialogCloseButton />
                                    <AlertDialogBody>
                                        {alertMessage}
                                    </AlertDialogBody>
                                    <AlertDialogFooter>
                                        {
                                            alertTitle === "Invalid Input!" ? 
                                            (
                                                <Button onClick={onClose} background='#e45858' color="#fffffe">
                                                    Back to page
                                                </Button>
                                            ) : (
                                                <Button onClick={onClose} background='#6246ea' color="#fffffe">
                                                    Back to page
                                                </Button>
                                            )}
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </Center>
                    </GridItem>
                </Grid>
                <Footer/>
            </Stack>
            <Prasmanan/>
        </Box>
    )
}

export default UploadDNA;