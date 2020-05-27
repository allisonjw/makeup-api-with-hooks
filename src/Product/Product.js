import React from 'react';

export const Product = ({ id, brand, name, image_link, product_link, description, tag_list }) => {
    
    return (
        <>
        <h3 className="product_h3">Name: {name}</h3>
        <h4 className="product_h4">Brand: {brand}</h4>
        <object className='product-img' data={image_link} type='image/jpg' alt={name}>
            <img className='product-img' src={require('../Images/default_image.jpg')} alt='default' />
        </object>
        <p className="product_description">{description}</p>
        <a href={product_link}>Product Link</a>
        </>
    )
}

export default Product;