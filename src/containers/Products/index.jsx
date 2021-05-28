import axios from 'axios';
import React from 'react';
import Product from '../../components/Product';
import { get } from '../../http';
import { fetchProducts } from '../../effects';
import { getProducts } from '../../reducers/products';
import { connect } from 'react-redux';


class Products extends React.Component {
    state = {
      products: null,
    }
  
    // fetchProducts = async () => {
    //   const categoryUrl = window.location.pathname;
    //   await get(categoryUrl).then((res) => {
    //     console.log(res);
    //     // debugger;
    //     this.setState({products: res});
    //   })
    // }
  
    UNSAFE_componentWillMount() {
      this.props.fetchProducts(this.props.match.params.category_id);
      //debugger;
    }
  
    render () {
      const { products } = this.props;
      debugger;
      return(
        <div>
          {products?.map((product) =>
            <Product key={`product-${product.id}`} product={product}/>
          )}
        </div>
      );
  
  
    }
  }
  
 // export default Products;


 const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (categoryId) => dispatch(fetchProducts(categoryId)),
});

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);