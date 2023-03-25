import './ProductDetail.css'
import { useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';

function ProductDetail() {
    const location = useLocation();
    const { id, description } = location.state;
    return (
      <div>
        <Nav />
        <div className="all">

        <div className='main-content'>
            <div className="product-display">
              <div className='two-columns'>
                <div className='display-left'>
                  <img src="https://www.lookchem.cn/ProImage/2010/0626/79-14-1.jpg" alt="" className='product-img' />
                </div>

                <div className='display-right'>
                  <div className='title'>
                    <h2>Title</h2>
                  </div>
                  <div className='entry'>
                    <span className='first'>Name: </span>
                    <span className='second'>Good</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>Description: </span>
                    <span className='second'>{description}</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>Description: </span>
                    <span className='second'>{description}</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>Description: </span>
                    <span className='second'>{description}</span>
                  </div>

                  <div className='entry'>
                    <span className='first'>Description: </span>
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