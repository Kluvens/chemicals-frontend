import { Link } from "react-router-dom";
import './Product.css'

function Product(props) {
    const { id, name, category, price, description } = props.product;
  
    return (
      <div className='product'>
        
          <Link to="/product" state={{ id: id,  description: description}}>
            <div className="p-img">
              <img src="https://www.lookchem.cn/ProImage/2010/0626/79-14-1.jpg"/>
            </div>
          </Link>

        <h3 className="label">{name}</h3>
        <p className="label">Category: {category}</p>
        <Link to="/message" state={{ id: id, name: name}}>
          <button className="inquriy">Add to cart</button>
        </Link>
      </div>
    );
}

export default Product;