import React, { useState } from "react";


interface SearchBoxProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            setError('Please enter a search term');
            return;
        }
        setError('');
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col items-center space-y-4">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Search
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}