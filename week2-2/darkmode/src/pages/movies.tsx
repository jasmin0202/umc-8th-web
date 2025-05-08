<<<<<<< HEAD
<<<<<<< HEAD
=======
const MoviePage = () => {
    return (
        <h1>영화</h1>
=======
>>>>>>> 76ed070e172670944556d0da4a15e2a022f12383

import { Movie, MovieResponse } from '../types/movie'
import { useState, useEffect } from 'react'

import axios from 'axios'

const MoviePage = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovies = async() => {
            // 응답에 대한 타입 정의
            const { data } = await axios.get<MovieResponse>(
            `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                }
            }
            )
            setMovies(data.results)
        }

        fetchMovies();
    }, [])
    return (
        <ul>
            {movies?.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                    
                </li>
            ))}
        </ul>
<<<<<<< HEAD
=======
const MoviePage = () => {
    return (
        <h1>영화</h1>
>>>>>>> b5f50e2b4b73d352c33c3ba23a942e4dba5ae229
=======
>>>>>>> 8aa85a1ad6ec53662dec6c3902f451304528b36a
>>>>>>> 76ed070e172670944556d0da4a15e2a022f12383
    )
}

export default MoviePage