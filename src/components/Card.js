import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight:"22rem"}}>
        <img className="card-img-top" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is Some important text
          </p>
          <div className="container w-100 d-flex">
            <select className="m-2 p-1 h-100 bg-success rounded">
              {Array.from(Array(6),(e,i)=>{
                return(
                  <option key ={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <select className="m-2 p-1 h-100 bg-success rounded">
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>
            <div className="d-inline fs-5 p-1">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
