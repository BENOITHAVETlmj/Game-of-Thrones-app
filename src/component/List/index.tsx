import React from "react";

interface Props {
  items: any[];
}

const List: React.FC<Props> = ({ items }) => {
  console.log(items);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item?.aliases?.[0]}</li>
      ))}
    </ul>
  );
};

export default List;