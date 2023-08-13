const Child = ({showModal}) =>{
    return (
        <div className="Child">
            <h1>Child Component</h1>
            <button onClick={()=> showModal(true)}>Show Modal</button>
        </div>
    )
}

export default Child;