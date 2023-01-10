import React from 'react';
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa";

const Icon=({name}) =>{
    return (
        <div>
        <h1><FaTimes className='icon'/></h1>
        <h1><FaPen className='icon'/></h1>
        <h1><FaRegCircle className='icon'/></h1>
        </div>
    )
};

export default Icon;