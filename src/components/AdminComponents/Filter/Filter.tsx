interface FilterProps {
    handleFilter: (query: string) => any;
}

const Filter: React.FC<FilterProps> = ({ handleFilter }) => {
    const createFilterButton = (text: string) => (
        <button
            onClick={() => handleFilter(text)}
            className="bg-slate-500/80 px-4 py-[2px] rounded-sm text-white text-sm hover:bg-button-green capitalize"
            type="button"
        >
            {text}
        </button>
    );

    return (
        <div className="w-[400px] flex items-center gap-2 h-12 rounded-lg drop-shadow-xl px-4 bg-white overflow-hidden">
            <span className="font-bold text-base mr-3">Filter:</span>
            {createFilterButton('test')}
            {createFilterButton('female')}
            {createFilterButton('male')}
        </div>
    );
};

export default Filter 
