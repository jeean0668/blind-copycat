
import React, { useState } from "react";
import './searchingBar.css'
import Image from "next/image";
interface Item {
    
    type : string,
    placeholder : string,
    className : string,
    imgsrc : string,
    width : number,
    height : number
};



const SearchingButtonImage : any = (i:Item) => {

    const defaults : Pick<Item, "imgsrc"> = {
        imgsrc : "./search.svg",
    };

    return (
        <button className = {i.className}>
            <Image src={i.imgsrc} alt={i.placeholder} width={i.width} height={i.height}></Image>
        </button>
    );

};

export default SearchingButtonImage;