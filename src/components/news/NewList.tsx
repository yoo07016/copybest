"use client"

import { useQuery } from "@tanstack/react-query";
import { News } from "@/model/news";
import { Data } from "@/model/data";

async function getNewsAll() {
    const res = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`, {
        next: {
            tags: ['news'],
        },
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default function NewList() {
    const { data } = useQuery<Data>({
        queryKey: ['news'],
        queryFn: getNewsAll,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    })

    return (
        <>
            {data!==undefined?data.data.map((news) => {
                return (
                    <>
                        <li className="mt-3 flex">
                            <div className="bg-neutral-700 w-1/6 h-28"></div>
                            <div className="bg-slate-400 w-5/6 h-28 mr-1">
                                <div className="text-xl text-blue-500 font-bold">{news.Nation}</div>
                                <div className="text-xs text-neutral-500">writer - time</div>
                                <div>{news.Population}</div>
                            </div>
                        </li>
                        <div className="border-t-2 mb-4 mt-4"></div>
                    </>
                )
            }):<></>}
        </>
    );
}