import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../axios';
import "../Row.css";
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //This runs a code based on specific conditions i.e when the row loads. If [], run once when the row loads and don't run again. The [] is called a dependency
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl); //post is used to get sensitive information, put is if you want to update, delete or remove information. get is mostly used for search
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("");
    }
    else{
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams (new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      }).catch((error => console.log(error))); //Always use try and catch whenever you are sending links
    }
  }

  return (
    <div className="row">
      {/* title  */}
        <h2>{title}</h2>

        <div className="row_posters">
          {/* several row posters  */}

         {movies.map(movie => (
            <img key={movie.id}
            onClick={() => handleClick(movie)}
             className= {`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

      {/* container -> posters  */}
    </div>
  )
}

export default Row