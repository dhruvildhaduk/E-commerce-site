import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext); // Ensure correct context key
  const { productId } = useParams();
  const product = all_product?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div className="text-center mt-10 text-red-500 font-semibold">Product not found!</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <ReletedProducts/>
    </div>
  );
};

export default Product;
