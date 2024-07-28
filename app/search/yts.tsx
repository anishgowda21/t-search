import React, { useState, useEffect } from "react";
import ISO6391 from "iso-639-1";
import { FaMagnet } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

interface torrentObject {
  torrent_file: String;
  magnet: String;
  quality: String;
  type: String;
  seeds: Number;
  peers: Number;
  size: String;
  upload_date: String;
  hash: String;
}

interface movieObject {
  name: String;
  cover_image: Base64<"jpeg">;
  description: String;
  imdb: String;
  year: Number;
  language: String;
  torrents: torrentObject[];
}

interface ytsObject {
  status: String;
  movie_count: Number;
  query: String;
  data: movieObject[];
}

interface ytsResultProps {
  results: ytsObject;
}

interface formatedTors {
  [type: string]: torrentObject[];
}

const formateTorrent = (torrData: torrentObject[]) => {
  return torrData.reduce((acc: formatedTors, torr: torrentObject) => {
    const { type } = torr;
    if (!acc[type.toString()]) {
      acc[type.toString()] = [];
    }
    acc[type.toString()].push(torr);
    return acc;
  }, {});
};

const YtsResults: React.FC<ytsResultProps> = React.memo(({ results }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div>
      <h2>Search Results for "{decodeURI(results.query.toString())}"</h2>
      <p>Total Results: {results.movie_count.toString()}</p>
      <>
        {results.data.map((mObj, idx) => {
          const groupedTorrents = formateTorrent(mObj.torrents);

          return (
            <div
              key={idx}
              className="overflow-x-auto m-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={mObj.cover_image}
                  alt={mObj.name.toString()}
                ></img>
                <div className="flex flex-col p-4 leading-normal">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mObj.name}
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {mObj.description}
                  </p>
                  <p className="mb-3 font-semibold text-gray-700 dark:text-gray-300">
                    Language: {ISO6391.getName(mObj.language.toString())}
                  </p>

                  {Object.keys(groupedTorrents).map((type) => (
                    <div key={type}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {type.toUpperCase()}
                      </h4>
                      <div className="flex flex-wrap">
                        {groupedTorrents[type].map(
                          (torrent: torrentObject, tIdx: number) => (
                            <button
                              key={tIdx}
                              className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                              onClick={() =>
                                copyToClipboard(torrent.magnet.toString())
                              }
                            >
                              {torrent.quality}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
});

export default YtsResults;
