import { useEffect, useState } from "react";

const tempSongs = [
  {
    id: 1,
    name: "Smell like teen spirit",
    author: "Nirvana",
    album: "In Utero",
    year: 2024,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
  },
  {
    id: 2,
    name: "Just Say Run",
    author: "Master Urushi",
    album: "DBZ",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcB91dM9VyKi58HVwyqN8wmRT26bDZiT8sg&s",
  },
  {
    id: 3,
    name: "I feel like storm",
    author: "Goku",
    album: "Sandstorm",
    year: 1996,
    image:
      "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aecf4604-1d3b-417f-97c6-d5be80f51eb9/3.jpg",
  },
  {
    id: 4,
    name: "Smell like teen spirit",
    author: "Nirvana",
    album: "Top Gum",
    year: 2024,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
  },
  {
    id: 5,
    name: "Just Say Run",
    author: "Master Urushi",
    album: "Amazed",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcB91dM9VyKi58HVwyqN8wmRT26bDZiT8sg&s",
  },
  {
    id: 6,
    name: "I feel like storm",
    author: "Goku",
    year: 1996,
    album: "Sandstorm",
    image:
      "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aecf4604-1d3b-417f-97c6-d5be80f51eb9/3.jpg",
  },
  {
    id: 7,
    name: "Just Say Run",
    author: "Master Urushi",
    album: "Amazed",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcB91dM9VyKi58HVwyqN8wmRT26bDZiT8sg&s",
  },
  {
    id: 8,
    name: "Smell like teen spirit",
    author: "Nirvana",
    album: "In Utero",
    year: 2024,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
  },
  {
    id: 9,
    name: "I feel like storm",
    author: "Goku",
    album: "Sandstorm",
    year: 1996,
    image:
      "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aecf4604-1d3b-417f-97c6-d5be80f51eb9/3.jpg",
  },
  {
    id: 10,
    name: "Just Say Run",
    author: "Master Urushi",
    album: "Amazed",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcB91dM9VyKi58HVwyqN8wmRT26bDZiT8sg&s",
  },
];

interface IHomeSongsItemProps {
  name: string;
  author: string;
  year: number;
  image: string;
  id: number;
  album: string;
}

const HomeSongs = () => {
  const [songs, setSongs] = useState<IHomeSongsItemProps[]>([]);

  useEffect(() => {
    setSongs(tempSongs);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="lg:w-4/6 w-full p-4 flex flex-row flex-wrap">
        {songs.length > 0 &&
          songs.map((song: IHomeSongsItemProps) => {
            return (
              <div
                key={song.id}
                className="flex flex-col items-center mb-6 lg:w-1/5 sm:w-1/3 w-1/2"
              >
                <div className="w-10/12 flex flex-col">
                  <img
                    src={song.image}
                    alt=""
                    className="w-full h-32 object-cover rounded"
                  />
                  <h2 className="font-serif text-xs font-semibold mt-2">
                    {song.name}
                  </h2>
                  <h3 className="font-sans text-[10px] text-gray-400 font-medium">
                    {song.author}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeSongs;
