import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon 
} from '@chakra-ui/icons';

const LinkPage = ({currentPage, thisPage, linkPage}) => {
  console.log(currentPage, thisPage, linkPage)
  return (
    <>
      {(currentPage === thisPage) ? (
        <Link
          px={2}
          py={1}
          rounded={'md'}
          fontWeight="bold"
          fontSize="xl"
          closeOnOverlayClick={true}
          _hover={{
            textDecoration: 'none',
            fontWeight:"bold",
            color:"#E45858",
            borderColor:"#2B2C34"
          }}
          href={linkPage}
        >
            {thisPage}
        </Link>
      ) : (
        <Link
          px={2}
          py={1}
          rounded={'md'}
          fontWeight="normal"
          fontSize="xl"
          closeOnOverlayClick={true}
          _hover={{
            textDecoration: 'none',
            fontWeight:"bold",
            color:"#6246EA"
          }}
          href={linkPage}
        >
            {thisPage}
        </Link>
      )}
    </>
  )
}

const Links = ({currentPage}) => {
  return (
    <HStack spacing='30px'>
      <LinkPage currentPage={currentPage} thisPage='Home' linkPage='/'/>
      <LinkPage currentPage={currentPage} thisPage='Test' linkPage='/check-dna'/>
      <LinkPage currentPage={currentPage} thisPage='Search' linkPage='/search-dna'/>
      <LinkPage currentPage={currentPage} thisPage='Upload' linkPage='/upload-dna'/>
    </HStack>
  )
}


function Header({currentPage}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={"#FFFFFE"} px="10%">
        <Flex h="60px" alignItems={'center'} justifyContent={'right'}>
          {isOpen ? (
            <Box>
              <Stack as={'nav'} spacing={4}>
                <Links currentPage={currentPage} mr="5vw"/>
              </Stack>
            </Box>
          ) : null}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={9} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              <Links currentPage={currentPage}/>
            </HStack>
          </HStack>
        </Flex>
      </Box>
  );
}

export default Header;