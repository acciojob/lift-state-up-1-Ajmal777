import React from "react";
const Child = ({showModal, modal}) =>{
    return (
        <div className="child">
            <h1>Child Component</h1>
            <button onClick={()=> showModal(!modal)}>Show Modal</button>
        </div>
    )
}

export default Child;