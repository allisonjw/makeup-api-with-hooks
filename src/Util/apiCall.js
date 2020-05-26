export const getProducts = async product => {
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`;
    const response = await fetch(url);
    const data = await response.json();
    const spliceData = data.splice(0, 30);
  
    const cleanedData = cleanProductData(spliceData);
    if (!response.ok) {
        throw new Error('Error fetching the makeup products');
    }
    return await Promise.all(cleanedData);
}
  
const cleanProductData = (data) => {
  return data.map(async result => {
    const {id, brand, name, image_link, product_link, description, tag_list} = result;
    return { id, brand, name, image_link, product_link, description, tag_list}
  });
};