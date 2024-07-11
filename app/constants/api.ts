export const API_BASE_URL = "/api/";

export const getSearchUrl = (searchOption: string, query: string): string => {
    return `${API_BASE_URL}${searchOption}?query=${encodeURIComponent(query)}`
};