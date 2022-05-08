import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  };
  return (
    <div className='w-50 mx-auto'>
      <h2>Add your product.</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder='Description' className='my-2' {...register("description")} />
        <input placeholder='Price' className='my-2' type="number" {...register("price")} />
        <input placeholder='Photo URL' className='my-2' type="text" {...register("img")} />
        <input className='btn btn-info w-25 mx-auto' type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddProduct;