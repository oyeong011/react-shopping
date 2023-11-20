import { useDispatch } from "react-redux";
import "./ProductListComponent.css";
import { setCategory } from "../features/counter/products/productsSlice";


const categories = ['all', 'electronics', 'jewelery',  "men's clothing", "women's clothing"];


const CategoryButtons: React.FC = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Product</h1>
            <div className="btn-List">
                <button
                    key={categories[0]}
                    onClick={() => dispatch(setCategory(categories[0]))}
                >
                    모두
                </button>
                <button 
                    key={categories[1]}
                    onClick={() => dispatch(setCategory(categories[1]))}
                >
                    전자기기
                </button>
                <button 
                    key={categories[2]}
                    onClick={() => dispatch(setCategory(categories[2]))}
                >
                    쥬얼리
                </button>
                <button 
                    key={categories[3]}
                    onClick={() => dispatch(setCategory(categories[3]))}
                >
                    남성의류
                </button>
                <button 
                    key={categories[4]}
                    onClick={() => dispatch(setCategory(categories[4]))}
                >
                    여성의류
                </button>
            </div>
        </div>
    )
}

export default CategoryButtons;