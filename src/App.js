import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import UploadDNA from './pages/UploadDNA';
import CheckDNA from './pages/CheckDNA';
import SearchDNA from './pages/SearchDNA';

import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/check-dna" element={<CheckDNA/>}/>
          <Route path="/upload-dna" element={<UploadDNA/>}/>
          <Route path="/search-dna" element={<SearchDNA/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
