import React from "react";

const LineBasket = (props) => {
  return (
    <tr className="line-basket">
      <td>
        <img src={props.data.url} alt={props.data.name} />
      </td>
      <td>{props.data.name}</td>
      <td>{props.data.price}</td>
      <td>qte</td>
      <td>total ligne</td>
    </tr>
  );
};

export default LineBasket;
