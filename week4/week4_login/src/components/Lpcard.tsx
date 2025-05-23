
import { useState } from "react";
import useGetLpList from "../hooks/queries/useGetLpList";

export default function Lpcard() {
    const { data, isPending, isError } = useGetLpList({})
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <div className='p-3 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl: grid-cols-6'>
            {data?.data.map((lp) => (
                <img key={lp.id} src={lp.thumbnail} alt={lp.title} 
                className='w-full h-full object-cover  aspect-square cursor-pointer
            w-44 transition-transform duration-300 hover:scale-105' />

            {isHovered && (
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md text-white
                flex flex-col justify-center '>
                    <h2 className='text-lg font-bold text-center leading-snug'>{lp.title}</h2>
                    <p className='text-sm text-grey-300 leading-relaxed mt-2 line-clamp-3'>{lp.overview}</p>
                </div>
            )}
        ))}
        
        </div>
        </>
    )

}