import React from 'react';
import { useSelector } from 'react-redux';
import './Product.scss';
import '../Categories/Categories.scss';

export const Product = ({ brand, name, image_link, product_link, description }) => {
    const isLoading = useSelector(state => state.isLoading);

    
    return (
        <>
            {isLoading && <img className="loading_img" src={require("../Images/loader.gif")} alt="loading" />}
    {!isLoading && <section className="product_card">
            <h3 className="product_h3">{name}</h3>
            <h4 className="product_h4">{brand}</h4>
            <object className='product_img' data={image_link} type='image/jpg' alt={name}>
                <img href={product_link} className='product_img' src={require('../Images/default_image.jpg')} alt='default' />
            </object>
            <p className="product_description">{description}</p>
            <a href={product_link}
            className="product_link">
                Product Link</a>
        </section>}
        </>
    )
}

export default Product;