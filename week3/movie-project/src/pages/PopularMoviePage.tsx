import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import MovieCard from '../components/MovieCard';
import { Movie, MovieResponse } from '../types/movie';

export default function PopularMoviePage(): React.ReactElement {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const {category} = useParams<{category : string;}>();

    useEffect((): void => {
        const fetchMovies = async () : Promise<void> => {
            const { data } = await axios.get<MovieResponse>(
                `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
                    }
                }
            );
            setMovies(() => [...data.results]);
        }

        

        fetchMovies()
       }, [page, category]); // url에서 카테고리 가져옴

       return (
        <>
        <div className="flex items-center justify-center p-4 gap-10 cursor-pointer">
            <button className='bg-gray-500 text-white p-2 rounded' onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
                이전
            </button>

        {`${page}`}

            <button className='bg-gray-500 text-white p-2 rounded cursor-pointer' onClick={() => setPage((prev) => prev + 1)}>
                다음
            </button>

        </div>
        {/* 무비카드 */}
        <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl: grid-cols-6'>
         

        {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </>
       )
      


} 
