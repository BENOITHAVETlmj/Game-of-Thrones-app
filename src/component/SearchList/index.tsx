import List from "../../component/List";
import SearchBar from "../../component/Search";
import { useQuery } from "react-query";
import { Page } from "../../App";
import { useLocation } from "react-router";

interface Props {
  page: Page;
}

const SearchList: React.FC<Props> = ({page}) => {
  const { isLoading, error, data } = useQuery(`${page}`, () =>
    fetch(`https://anapioficeandfire.com/api/${page}`).then((res) => res.json())
  );

  const location = useLocation()

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)


  // TODO could be more generic :)
  const typeList = location.pathname.includes("characters") ? Page.Characters : Page.Books

  return (
    <>
     <SearchBar onSearch={()=> console.log('log')} />
     <List items={data} typeList={typeList}/>
    </>
  )
}

export default SearchList;