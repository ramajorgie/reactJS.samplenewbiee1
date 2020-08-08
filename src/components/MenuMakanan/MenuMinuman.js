import React from 'react';

var menuMinuman = (props) => {
    return(
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
        <p>Nama Menu : {props.nama} </p>
        <p>Harga     : {props.harga} </p>
        <p>Stock     : {props.stock} </p>
      </div> 
    )
}
export default menuMinuman;