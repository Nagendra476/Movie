import React from "react";
import { Link } from "react-router-dom";
// Import local image for main banner

import salaarImg from "../Images/salaar.jpg";
import hinannaImg from "../Images/hinanna.jpg";
import kantaraImg from "../Images/kantara.jpg";
import animalImg from "../Images/animal.jpg";
import zootopiaImg from "../Images/zootopia.jpg";
import avatarImg from "../Images/avatar.jpg";
import Navbar from "./Navbar";


const movies = [
  { id: 1, title: "Salaar", poster: salaarImg, rating: "⭐ 8.1" },
  { id: 2, title: "Hi Nanna", poster: hinannaImg,rating: "⭐ 7.5" },
  { id: 3, title: "Kantara", poster: kantaraImg, rating: "⭐ 8.7" },
  { id: 4, title: "Animal", poster: animalImg, rating: "⭐ 7.9" },
  { id: 5, title: "Zootopia", poster: zootopiaImg, rating: "⭐ 8.0" },
  { id: 6, title: "Avatar", poster: avatarImg,  rating: "⭐ 7.8" },
  { id: 7, title: "Avatar", poster: avatarImg,  rating: "⭐ 7.8" },
];


const HomePage = () => {
  return (
    <>
    
    
    <div className="pt-32 px-6 w-full">
  

      <div className="flex flex-wrap gap-6 justify-start">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-53 bg-white shadow rounded-lg overflow-hidden"
          >
            <Link to={`/seat-hall/${movie.id}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-72 w-full object-cover"
            /></Link>
            <div className="p-3">
              <h3 className="font-semibold">{movie.title}</h3>
              <p className="text-yellow-600 text-sm"> {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </>


  );
};

export default HomePage;
