
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatchCart, useCart } from './ContextReducer';

const Card = (props) => {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const option = props.options;
  const priceOption = Object.keys(option);
  const foodItem = props.foodItem;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOption[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateDescription = (text) => {
    if (text.split(' ').length > 10) {
      return text.split(' ').slice(0, 10).join(' ') + '...';
    } else {
      return text;
    }
  };

  const handleAddToCart = async () => {
    const existingFoodItem = data.find(item => item.id === foodItem._id && item.size === size);

    const finalPrice = qty * parseInt(option[size]);

    if (existingFoodItem) {
      await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
    } else {
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: "20rem", maxHeight: "25rem" }}>
        <img className="card-img-top" src={foodItem.img} alt="..." style={{ maxHeight: "10rem", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text text-light">
            <em>
              {showFullDescription ? foodItem.description : truncateDescription(foodItem.description)}
              {foodItem.description.split(' ').length > 10 && (
                <span>
                  <Link to="#" onClick={(e) => {
                    e.preventDefault();
                    setShowFullDescription(!showFullDescription);
                  }}>
                    {showFullDescription ? ' Read less' : ' Read more'}
                  </Link>
                </span>
              )}
            </em>
          </p>
          <div className="container w-100 d-flex">
            <select className="m-2 p-1 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="m-2 p-1 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOption.map((data) => (
                <option key={data} value={data}>{data}</option>
              ))}
            </select>
            <div className="d-inline fs-5 p-1">
              Rs.{qty * parseInt(option[size])}/-
            </div>
          </div>
          <hr />
          <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;



