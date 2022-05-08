import React from 'react';
import useProduct from '../../hooks/useProduct';
import './ManageProduct.css';

const ManageProduct = () => {
  const [products, setProduct] = useProduct();
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete?');
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: 'DELETE',

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = products.filter(product => product._id !== id);
          setProduct(remaining);
        })
    }
  }
  return (

    <div>
      <h2>Manage product</h2>
      <div className='manage-product container'>
        {
          products.map(product => <div key={product._id} product={product}>
            <div className="row ">
              <div className="col">
                <div className="card h-100">
                  <img src={product.img} className="card-img-top" alt="..." height="400" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="card-title">{product.price}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-footer">
                    <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>)

        }
      </div>
    </div >
  );
};

export default ManageProduct;