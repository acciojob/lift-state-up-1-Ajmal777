import React from "react";
const Child = ({showModal, modal}) =>{
    return (
        <div className="child">
            <h1>Child Component</h1>
            <button onClick={()=> showModal(!modal)}>Show Modal</button>
            {modal && 
                <div className="modal">
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            }
        </div>
    )
}

export default Child;