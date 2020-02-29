import React from "react";

const ListItem = ({data}) => (
    <tr>
        <td>{data ? data.date : ''}</td>
        <td>{data ? data.exchangeRate[23].saleRateNB : ''}</td>
    </tr>
);

export default ListItem;