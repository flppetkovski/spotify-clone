import { MdOutlineShortText } from 'react-icons/md'

const Search = ({ search, setSearch }) => {
  return (
    <div className="max-w-[1150px] bg-[#1a1a1a] px-5 pr-8 flex items-center overflow-hidden border-2 rounded-full border-[#333333] p-1.5">
      <div className="flex-shrink-0 w-4 h-4 border-2 rounded-full animate-pulse " />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
      <div className="flex items-center divide-x-2 divide-dotted divide-[#333] ml-auto">
        <div className="flex pr-5 space-x-2">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
        </div>
        <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="text-sm font-medium">Filters</span>
        </div>
      </div>
    </div>
  )
}

export default Search
