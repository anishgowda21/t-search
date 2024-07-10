'use client';

import React, { useState } from 'react';

import Logo from './components/logo'
import SearchBox from './components/SearchBox'
import SearchOptions from './components/SearchOptions'

const handleSearch = (searchTerm: string, selectedOption: string) => {
  console.log('Search Term:', searchTerm);
  console.log('Search Option:', selectedOption);
};

export default function Home() {

  const [selectedOption, setSelectedOption] = useState('yts');
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <div className="w-full max-w-2xl">
        <SearchBox onSearch={(searchTerm) => handleSearch(searchTerm, selectedOption)} />
        <SearchOptions
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
        />
      </div>
    </main>
  );
}