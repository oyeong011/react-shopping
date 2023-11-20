import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { selectFilteredProducts } from "../features/counter/products/productsSlice";
import './ProductDetailComponent.css';
import { addToCart } from "../features/cart/cartSlice";

const ProductDetailComponent : React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productId } = useParams();
    const products = useSelector(selectFilteredProducts);
    const product = products.find((p) => p.id === Number(productId));

    const handleAddToCart = (product: any) => {
        alert(`${product.title}을 장바구니에 담았습니다.`);
        dispatch(addToCart({ product, quantity: 1 }));
    };

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product?.image} alt={product?.title} />
            </div>
            <div className="product-info">
                <span className="category">{product?.category}</span>
                <h1 className="title">{product?.title}</h1>
                <div className="price">{product?.price} $</div>
                <p className="description">
                    {product?.description}
                </p>
                <div className="actions">
                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>장바구니에 담기</button>
                    <button className="buy-now" onClick={() => navigate("/cart")}>장바구니로 이동</button>
                </div>
            </div>
        </div>
    )

}

export default ProductDetailComponent;