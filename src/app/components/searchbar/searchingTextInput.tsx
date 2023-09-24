import React, { useState } from "react";
import './searchingBar.css'


interface Item{
    className : string,
    type : string,
    placeholder : string, 
};

const SearchingTextInput:any = (i : Item) => {
    return (
        <div className={i.className}>
            <input type={i.type} placeholder={i.placeholder} id="text-input"/> 
        </div>
    );
};

export default SearchingTextInput;