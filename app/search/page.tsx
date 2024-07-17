'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getSearchUrl } from '../constants/api';
import NyaaResults from './nyaa'

export default function SearchResults() {
    const searchParams = useSearchParams();
    console.log(searchParams);
    const searchOption = searchParams.get('option') || 'yts';
    const query = searchParams.get('query') || '';
    const [results, setResults] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(getSearchUrl(searchOption, query));
                if (!response.ok) {
                    throw new Error('Failed to fetch results');
                }
                const data = await response.json();
                setResults(data);
            } catch (err) {
                setError('An error occurred while fetching results');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [searchOption, query]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!results) return <div>No results found</div>;

    if (searchOption == 'nyaa') {
        return <NyaaResults results={results} />;
    }
    return (
        <div>
            <h1>Search Results for "{query}" in {searchOption}</h1>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}