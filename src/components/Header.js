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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = () => {
  return (
    <Box>
      {/* HOME */}
      <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight="medium"
        _hover={{
          textDecoration: 'none',
          fontWeight:"semibold",
          color:"#6246EA",
          border:"2px",
          padding:"8px",
          borderColor:"#2B2C34"
        }}
        href={'/'}>
          Home
      </Link>

      {/* TEST */}
      <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight="normal"
        _hover={{
          textDecoration: 'none',
          fontWeight:"semibold",
          color:"#E45858",
        }}
        href={'/check-dna'}>
          Test
      </Link>

      {/* SEARCH */}
      <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight="normal"
        _hover={{
          textDecoration: 'none',
          fontWeight:"semibold",
          color:"#E45858",
        }}
        href={'/search-dna'}>
          Search
      </Link>

      {/* UPLOAD */}
      <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight="normal"
        _hover={{
          textDecoration: 'none',
          fontWeight:"semibold",
          color:"#E45858",
        }}
        href={'/upload-dna'}>
          Upload
      </Link>
    </Box>
  )
}


export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={"#FFFFFE"} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'right'}>
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
              <Links />
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Links />
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}
