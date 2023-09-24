
import React, { useState } from "react";
import './searchingBar.css'
import SearchingButtonImage from "./SearchingButtonImage";
import SearchingTextInput from "./searchingTextInput";

interface Item {
    
    type : string,
    placeholder : string,
    id : string,
    imgsrc : string
};



const SearchingBar : any = (i:Item) => {

    const defaults : Pick<Item, "imgsrc"> = {
        imgsrc : "./search.svg",
    };

    return (
        <div className="main-search-wrapper">
            <div className="main-search-wrapper main-search">
                <SearchingButtonImage imgsrc={i.imgsrc} alt={i.placeholder} width={25} height={25} 
                    className ="main-search-wrapper main-search main-search-button"></SearchingButtonImage>
                <SearchingTextInput placeholder={i.placeholder}
                    className ="main-search-wrapper main-search text-wrap"></SearchingTextInput>
            </div> 
        </div> 
    );

};

export default SearchingBar;