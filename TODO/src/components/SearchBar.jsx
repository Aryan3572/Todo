function SearchBar({ search, setSearch }) {

  return (

    <input
      className="w-full border border-gray-200 p-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Search todos..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  )
}

export default SearchBar