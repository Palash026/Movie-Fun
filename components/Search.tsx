"use client"
import { useRouter } from 'next/navigation';
export default function Search() {
  const router = useRouter();
 
  function handleSearch(term: string) {
    
    if (term) {
      router.push('/movies/search?query='+term);
    } else {
      router.push('/')
    }
  }
  return (
    <input
      type="text"
      placeholder="Search..."
      className="px-4 py-2 rounded-lg bg-gray-200 text-blue-600 focus:outline-none w-full md:max-w-md"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
