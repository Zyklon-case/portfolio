import React from "react";
import Anchor from "./Anchor";

const ListAnchor = (props) => {
    return (
        <li>
            <Anchor {...props} />
        </li>
    );
};

export default ListAnchor;