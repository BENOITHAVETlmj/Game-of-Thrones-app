import List from "../../component/List";
import SearchBar from "../../component/Search";
import { Page } from "../../App";

interface Props {
  page: Page;
}

const SearchList: React.FC<Props> = ({page}) => {
  return (
    <>
     <SearchBar onSearch={()=> console.log('log')} />
     <List page={page}/>
     {/* pagination to fetch 50 elements by page 43 pages */}
    </>
  )
}

export default SearchList;