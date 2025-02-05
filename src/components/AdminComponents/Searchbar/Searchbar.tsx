import { ChangeEvent } from 'react'

interface SearchBarProps {
    handleSearch: (query: string) => void;
}

const Searchbar = ({ handleSearch }: SearchBarProps) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        handleSearch(query);
    };

    return (
        <div className='w-[400px]'>
            <div className="relative flex items-center w-full h-12 rounded-lg drop-shadow-xl px-2 bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-slate-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                    onChange={handleInputChange} />
            </div>
        </div>
    )
}

export default Searchbar