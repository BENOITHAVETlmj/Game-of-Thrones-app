import SearchBar from "../../component/Search";

const SearchList = () => {
  return (
    <>
     <SearchBar onSearch={()=> console.log('log')} />
    </>
  )
}

export default SearchList;