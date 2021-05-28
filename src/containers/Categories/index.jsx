import React from 'react';
import {Link} from 'react-router-dom';
import { get } from '../../http';
import Category from '../../components/Category/index';
import { connect } from "react-redux";
import { getCategories } from "../../reducers/categories";
import { fetchCategories } from "../../effects";

class Categories extends React.Component
{
    state = { categories: null}

    // fetchCategories = async() =>{
    //     await get("/categories").then((data) =>{
    //         this.setState({categories: data});
    //     })

    // }

    UNSAFE_componentWillMount(){
        this.props.fetchCategories();
    }

    render(){
        const {categories} = this.props;
        return(
            <div>
                {categories?.map((category) =>(
                    <Category key ={`category-${category.id}`} category = {category}/>
                ))}
            </div>
        );
    }
}

// export default Categories;

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
  });
  
  const mapStateToProps = (state) => ({
    categories: getCategories(state),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  