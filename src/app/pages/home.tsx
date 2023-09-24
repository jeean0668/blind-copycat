import React, { useState } from "react";
import "./pages.css"
import SearchingBar from "../components/searchbar/searchingBar";

const Page1:any = () => {
    return (
        <div className="first-page">
            <div className="first-page column left">
                <SearchingBar type="text" placeholder="text" id = "main-search" imgsrc="./search.svg"></SearchingBar>
            </div>
            <div className="first-page column right">right column</div>
        </div>
    );
};

export default Page1