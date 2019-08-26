import React from "react";
import "./header.css";

const Header = (props) => {
    return (
        <div id="title">
            <h1 className="header">{props.children}</h1>
        </div>
    );
};

export default Header;