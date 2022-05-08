
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetails';
import Require from '../LogIn/Require/Require';


const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);

    return (
        <div>
            <h2 className='m-5'>Product Detail</h2>
            <div className="card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name:{product.name}</h5>
                            <h5 className="card-title">Price: ${product.price}</h5>
                            <h5 className="card-title">Supplier Name:{product.Supplier}</h5>
                            <h5 className="card-title">Description:{product.description}</h5>
                            <p className="card-text">Quantity:{product.quantity}</p>
                            <Require></Require>
                            <Link to='/checkout'>
                                <button className='btn btn-primary'>Place Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h3>Welcome to service detail:{product?.name}</h3> */}

        </div>
    );
};

export default ProductDetail;