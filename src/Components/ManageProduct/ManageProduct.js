import React from 'react';
import useProduct from '../../hooks/useProduct';

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
      <h2>manage product</h2>
      {
        products.map(product => <div key={product._id} product={product}>
          <h5>{product.name} <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></h5>
        </div>)

      }
    </div>
  );
};

export default ManageProduct;