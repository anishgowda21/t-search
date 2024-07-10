import React from 'react';

interface SearchOptionsProps {
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

const searchOptions = [
    { value: 'yts', label: 'YTS' },
    { value: 'nyaa', label: 'NYAA' },
];

export default function SearchOptions({ selectedOption, onOptionChange }: SearchOptionsProps) {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            {searchOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                    <input
                        type="radio"
                        name="searchOption"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={() => onOptionChange(option.value)}
                        className="mr-2"
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}