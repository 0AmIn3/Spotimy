import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Items = ({name, img, id}) => {
    const navigate = useNavigate()

    return ( 
        <Link to={`/playlist/${id}`} state={{img}} >
            <div className="grid-block overflow-hidden">
                <div className="grid-img shadowbox"style={{backgroundImage: `url(${img})`}} ></div>
                <p className="grid-text">{name}</p>
            </div>
        </Link>
     );
}
 
export default Items;