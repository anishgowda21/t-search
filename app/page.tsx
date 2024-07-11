'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Logo from './components/logo'
import SearchBox from './components/SearchBox'
import SearchOptions from './components/SearchOptions'


export default function Home() {

  const [selectedOption, setSelectedOption] = useState('yts');

  const router = useRouter();

  const handleSearch = (searchTerm: string) => {
    router.push(`/search?option=${selectedOption}&query=${encodeURIComponent(searchTerm)}`)
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <div className="w-full max-w-2xl">
        <SearchBox onSearch={(searchTerm) => handleSearch(searchTerm)} />
        <SearchOptions
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
        />
      </div>
    </main>
  );
}