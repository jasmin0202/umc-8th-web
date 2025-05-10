import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Movie } from '../types/movie';
import axios from 'axios';

const MovieDetailPage = () => {
  const{movieId} = useParams<{movieId:string}>(); 
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const { data } = await axios.get<Movie>(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
        {
          headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
          }
      }
    )
    setMovie(data);
  }
  fetchMovieDetail();
}, [movieId]); // 디테일 페이지는 어차피 재렌더링될 일 없어서 필요한가

  const year = movie?.release_date.slice(0, 4);
  return (
    <div className= 'w-screen h-screen'>
    <div className="relative w-screen h-1/2 overflow-hidden">
     {/* 이미지 */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt={movie?.title}
      />

  {/* 그라데이션 */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />

        <div className='absolute inset-0 overflow-hidden z-10 text-lg pl-10 text-white'>
          
          <h1 className='font-bold text-4xl pt-10 pb-5'>{movie?.title}</h1>
          <p className='text-lg '>평균 {movie?.vote_average}</p>
          <p className='text-lg'>{year}</p>
          <p>{movie?.runtime}분</p>
          <p className = "italic text-xl font-bold pt-2 ">{movie?.tagline}</p>
          <p className='text-lg w-1/2 pt-3 '>{movie?.overview}</p>
        </div>
      </div>
    
    

      <div className="text-white">
      <h1>감독/출연</h1>
      </div>
    </div>
      
   

    

    
  )
}

export default MovieDetailPage
