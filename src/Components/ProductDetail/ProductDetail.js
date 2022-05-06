
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetails';


const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    return (
        <div>
            <h2 className='m-5'>Product Detail</h2>
            <h3>Welcome to service detail:{product?.name}</h3>
            <Link to='/checkout'>
                <button className='btn btn-primary'>CheckOrder</button>
            </Link>
        </div>
    );
};

export default ProductDetail;