import React from 'react';
import { get } from '../../http';


class Category extends React.Component {

  render () {
    const { category } = this.props;
    return(
      <a href={`/categories/${category.id}/products`}>
        <div>{category.id}</div>
        <div>{category?.name}</div>
      </a>
    );
  }
}

export default Category;
