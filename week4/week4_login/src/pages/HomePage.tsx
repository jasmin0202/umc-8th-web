import useGetLpList from "../hooks/queries/useGetLpList";
import { useState } from "react";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const [hoveredLpId, setHoveredLpId] = useState<number | null>(null);
    const { data, isLoading, isError } = useGetLpList({
        search,
    });

    if (isLoading) {
        return <div className={"mt-20"}>Loading...</div>;
    }

    if (isError) {
        return <div className={"mt-20"}>Error...</div>;
    }

    return (
        <>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="mb-4 p-2 border rounded"
            />
            <div className="p-3 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {data?.data.map((lp) => (
                    <div
                        key={lp.id}
                        className="relative overflow-visible"
                        onMouseEnter={() => setHoveredLpId(lp.id)}
                        onMouseLeave={() => setHoveredLpId(null)}
                    >
                        <img
                            src={lp.thumbnail}
                            alt={lp.title}
                            className="w-full h-full object-cover aspect-square cursor-pointer w-44 transition-transform duration-300 hover:scale-105"
                        />
                        {hoveredLpId === lp.id && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent text-white flex flex-col justify-center">
                                <h2 className="text-lg font-bold text-center leading-snug">{lp.title}</h2>
                                <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-3">{new Date(lp.createdAt).toLocaleString()}</p>
                                <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-3">{lp.likes.length}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomePage;