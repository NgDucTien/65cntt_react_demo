import React from 'react';
export default function ProductCard({product}) {
    return <div className="card" style={{width: '300px'}}>
    <img src={product.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.price} vnd</p>
      <p className="card-text">{product.deseription}</p>
      <a href="#" className="btn btn-primary">Buy now</a>
    </div>
  </div> ;
}