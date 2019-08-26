import React from "react";
// import "./header.css";

const Header = (props) => {
    return (
        <div>
            <h1 className="header">{props.children}</h1>
            <h3 className="gameInstructions">Click on any image to make your score go up. BE CAREFUL!!!! If you click on any image more than once you will lose!!!!</h3>
        </div>
    );
};

export default Header;