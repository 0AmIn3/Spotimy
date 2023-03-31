import React from 'react';
import { Link } from "react-router-dom";

const Items = ({name, img, id}) => {
    return ( 
        <Link to={`/playlist/${id}`} >
            <div className="grid-block overflow-hidden">
                <div className="grid-img"style={{backgroundImage: `url(${img})`}} ></div>
                <p className="grid-text">{name}</p>
            </div>
        </Link>
     );
}
 
export default Items;