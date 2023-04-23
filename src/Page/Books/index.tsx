import { useQuery } from "react-query";
import BlankState from "../../component/BlankState";
import { Book } from "../../Validator/Book";

const Books = () => {
  const { isLoading, error, data } = useQuery('books', () => fetch(`https://anapioficeandfire.com/api/books?pageSize=50`).then((res) => res.json()));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Could not find any resource that matches the request, try again</p>;

  if(data.length < 1) return <BlankState>This page seems to be empty, try an other one</BlankState>

  return (
     <>
      <ul>
        {data.filter((e: Book) => e.name.length > 1).map((item: Book) => {
         return (
        <li key={item.url}>{item.name}</li>
        )
       })}
      </ul>
    </>
  )
}

export default Books;