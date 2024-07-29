import React from "react";
import { FaMagnet } from "react-icons/fa"
import { HiDownload } from "react-icons/hi";

interface NyaaTorrent {
    type: String,
    name: String,
    torrent: String,
    magnet: String,
    size: String,
    upload_date: String,
    seeders: String,
    leechers: String,
    complete_downloads: String,
}

interface NyaaApiResponse {
    status: String,
    orderdby: String,
    query: String,
    length: Number,
    page: Number,
    data: NyaaTorrent[]
}

interface NyaaResultProps {
    results: NyaaApiResponse
}

const NyaaResults: React.FC<NyaaResultProps> = ({ results }) => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div>
            <h2>Search Results for "{decodeURI(results.query.toString())}"</h2>
            <p>Total Results: {results.length.toString()}</p>
            <div className="overflow-x-auto">
                <table className="table-auto bg-gray-500">
                    <thead>
                        <tr className="bg-gray-600 text-gray-200 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Size</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-center">S</th>
                            <th className="py-3 px-6 text-center">L</th>
                            <th className="py-3 px-6 text-center">C</th>
                            <th className="py-3 px-6 text-center">Links</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 text-sm font-light">
                        {results.data.map((torrent, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <span>{torrent.name}</span>
                                </td>
                                <td className="py-3 px-6 text-left">{torrent.size}</td>
                                <td className="py-3 px-6 text-left">{torrent.upload_date}</td>
                                <td className="py-3 px-6 text-center">{torrent.seeders}</td>
                                <td className="py-3 px-6 text-center">{torrent.leechers}</td>
                                <td className="py-3 px-6 text-center">{torrent.complete_downloads}</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <button onClick={() => copyToClipboard(torrent.magnet.toString())} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <FaMagnet />
                                        </button>
                                        <button onClick={() => copyToClipboard(torrent.torrent.toString())} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <HiDownload />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NyaaResults;