import React from 'react';

var menuMakanan = (props) => {
    if( props.stock !==0)
    {
    return(
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu : {props.nama} </p>
            <p>Harga     :{props.harga} </p>
            <p>Stock     :{props.stock} </p>
          </div>
        )
    }
    else{
        return null;
    }
}
export default menuMakanan;