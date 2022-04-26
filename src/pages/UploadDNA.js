import React, {useState} from 'react';
import Header from '../components/Header';
import SubmitButton from '../components/SubmitButton';
import Title from '../components/Title';
import {
    Stack,
    Input,
    Button,
    Center,
    Box,
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react';

function UploadDNA() {
    const [disease, setDisease] = useState("");
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
                            bg="#D1D1E9"
                            variant='filled'
                            color="#515151"
                            placeholder="Disease name here"
                            textAlign="center"
                            fontWeight="normal"
                            fontSize={{ xl: '21px', lg: '15.5px', md: '11px', sm: '9px' }}
                            onChange={(e) => setDisease(e.target.value)}
                        />
                    </GridItem>
                    <GridItem colSpan={2} />
                    <GridItem colSpan={5}>
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

                    {/* Submit Button */}
                    <GridItem colSpan={14} pt="6%">
                        <Center
                            pt="2.5%"
                            pb="2%"
                        >
                            <SubmitButton text="SUBMIT" />
                        </Center>
                    </GridItem>
                </Grid>

            </Stack>
        </Box>
    )
}

export default UploadDNA;