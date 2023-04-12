import './ProductDetail.css'
import { useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import img1 from '../../assets/0.webp'

function ProductDetail() {
    const location = useLocation();
    const { product_id, name, category, price, description } = location.state;
    return (
      <div>
        <Nav />
        <div className="all">

        <div className='main-content'>
            <div className="product-display">
              <div className='two-columns'>
                <div className='display-left'>
                
                <img src={require(`../../assets/${product_id}.webp`)} alt="" className='product-img' />
                </div>

                <div className='display-right'>
                  <div className='title'>
                    <h2>{name}</h2>
                  </div>

                  <div className='entry'>
                    <span className='first'>分类: </span>
                    <span className='second'>{category}</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>价格: </span>
                    <span className='second'>¥{price}</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>简介: </span>
                    <span className='second'>{description}</span>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
          
      </div>
      </div>
    )
}

export default ProductDetail;