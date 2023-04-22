import React from "react";
import MainLogo from "../component/Logo/MainLogo";
import List from "../component/List";
import SearchBar from "../component/Search";
import { useQuery } from "react-query";


const Welcome = () => {
  const { isLoading, error, data } = useQuery('myData', () =>
    fetch('https://anapioficeandfire.com/api/characters').then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)

  return (
    <>
     <MainLogo />
     <SearchBar onSearch={()=> console.log('log')} />
     <List items={data} />
    </>
  )
}

export default Welcome;