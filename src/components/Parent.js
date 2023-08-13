import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () =>{
    const [modal, showModal] = useState(false);
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child showModal = {showModal} modal = {modal}/>
            {modal && 
                <div className="modal">
                    <h3>Modal Content</h3>
                    <p>This is the modal content</p>
                </div>
            }
        </div>
    )
}

export default Parent;