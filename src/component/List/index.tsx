import React from "react";

interface Props {
  items: string[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;