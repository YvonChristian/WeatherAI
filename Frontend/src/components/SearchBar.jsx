import { LuSearch, LuX } from 'react-icons/lu'
const SearchBar = ({ value, onChange, onSearchArticles, onClearSearch }) => {
  return (
    <div className="m-[8px] flex bg-white border-[1px] border-gray-300 rounded-full hover:border-blue-500">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder='Search for Articles'
        className="w-44 h-8 pl-5 text-sm rounded-full outline-none"
      />
      <div className='w-14 p-[5px] flex '>
        {value &&
          (
            <LuX
              size={17}
              className='mt-[2px] text-slate-400 cursor-pointer hover:text-black'
              onClick={onClearSearch}
            />
          )
        }
        <LuSearch
          size={17}
          className='mt-[2px] ml-3 text-slate-400 cursor-pointer hover:text-black'
          onClick={onSearchArticles}
        />
      </div>
    </div>
  )
}
export default SearchBar
