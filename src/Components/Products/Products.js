import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products] = useProduct();
    return (
        <div>
            <h1 className='fw-bold m-2'>Our Products</h1>
            <div className='services-container container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;