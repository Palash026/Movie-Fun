"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        if(query){
            router.push('/movies/search?query='+query);
        }else{
            router.push('/');
        }
    }, [query])
  return (
    <input
      type="text"
      placeholder="Search..."
      className="px-4 py-2 rounded-lg bg-gray-200 text-blue-600 focus:outline-none w-full md:max-w-md"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
