import React from "react";

interface Props {
  items: any[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item?.aliases?.[0]}>{item?.aliases?.[0]}</li>
      ))}
    </ul>
  );
};

export default List;