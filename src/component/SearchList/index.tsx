import List from "../../component/List";
import SearchBar from "../../component/Search";
import { useQuery } from "react-query";
import { Page } from "../../App";

interface Props {
  page: Page;
}

const SearchList: React.FC<Props> = ({page}) => {
  const { isLoading, error, data } = useQuery(`${page}`, () =>
  page === Page.Books ? fetch(`https://anapioficeandfire.com/api/${page}?pageSize=50`).then((res) => res.json())
  : fetch(`https://anapioficeandfire.com/api/${page}?page=45&pageSize=50`).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error || data.lenngth < 1) return <p>Could not find any resource that matches the request, try again</p>;
  console.log(data)

  return (
    <>
     <SearchBar onSearch={()=> console.log('log')} />
     <List items={data} />
    </>
  )
}

export default SearchList;