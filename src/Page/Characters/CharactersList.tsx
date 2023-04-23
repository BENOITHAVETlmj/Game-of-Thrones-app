import React from "react"
import { Character } from "../../Validator/Character"

interface Props {
  data: Character[]
}

const CharactersList: React.FC<Props> = ({data}) => {

return (
  <>
    {/* removes character with no name or aliases */}
     {data.filter((e: Character) => e?.aliases?.[0].length > 1 ||  e?.name.length > 1).map((item: Character) => {
         const characterDetails = {
           name: item?.aliases?.[0].length > 1 ? item?.aliases?.[0] : item.name,
           tvSeries: item.tvSeries,
           books: item.books,
           allegiances: item.allegiances,
           spouse: item.spouse,
           url: item.url
         }
        return (
         <li key={characterDetails.url}>{characterDetails.name}</li>
        )
      })
     }
  </>
 )
}

export default CharactersList;