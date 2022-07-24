import React from "react";

const RegionTable = ({ item, index }) => {
  const { name } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{name}</th>
    </tr>
  );
};

export default RegionTable;
