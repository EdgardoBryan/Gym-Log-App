import React from "react";

const QuoteTile = props =>{
    return(
        <div>
            <h1 className="quotes">{props.quote.q}
            {props.id}
            {props.quote.a}</h1>
        </div>
        )
}

export default QuoteTile