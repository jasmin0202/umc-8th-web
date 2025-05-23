import { useQuery } from "@tanstack/react-query";
import { getLpList } from "../../apis/lp";
import type { PaginationDto } from "../../types/common";


function useGetLpList({cursor,search,order,limit}: PaginationDto) {
    return useQuery( {
        queryKey: ["QUERY_KEY.lps", search, order, limit],
        queryFn:() =>
            getLpList({
                cursor,
                search,
                order,
                limit,
            }),
            staleTime: 1000 * 60 * 5, //5분
            gcTime: 100 * 60 * 10, // 10분,
            // 조건에 따라 쿼리 재실행 제어
            // refetchInterval:100* 60,
            retry: 3,
            // 파라미터가 변경될 때 이전 데이터를 유지하여 ui 깜빡임을 줄여준다.
            // keepPreviousData: true,

            select:(data) => data.data,
    }) 
}

export default useGetLpList;