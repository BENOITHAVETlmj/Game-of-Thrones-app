import MainLogo from "../../component/Logo/MainLogo";
import List from "../../component/List";
import SearchBar from "../../component/Search";
import { useQuery } from "react-query";
import { Page } from "../../App";

interface Props {
  page: string;
}

const SearchList: React.FC<Props> = ({page}) => {
  const { isLoading, error, data } = useQuery(`${page}`, () =>
    fetch(`https://anapioficeandfire.com/api/${page}`).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)

  return (
    <>
     <SearchBar onSearch={()=> console.log('log')} />
     <List items={data} />
    </>
  )
}

export default SearchList;