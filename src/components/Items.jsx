import React from 'react';
import { Link } from "react-router-dom";

const Items = ({name , img}) => {
    return ( 
        <div className="grid-block overflow-hidden">
            <div className="grid-img"style={{backgroundImage: `url(${img})`}} ></div>
            <p className="grid-text">{name}</p>
        </div>
     );
}
 
export default Items;