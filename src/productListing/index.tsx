import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Typography, Image } from "antd";
import { StyledCard, StyledContainer } from "./styling";
import Navbar from "../Pages/navbar";
const { Title } = Typography;

interface ProductData {
  products: myProps[];
  total: number;
  skip: number;
  limit: number;
}

export interface myProps {
  brand: string;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
}

export const ProductList = () => {
  const [data, setdata] = useState<ProductData | null>(null);
  useEffect(() => {
    axios
      .get<ProductData>("https://dummyjson.com/products")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.error("Api error", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <StyledContainer className="bg-[#100]">
        {data?.products.map((products) => {
          if (products.category=== "smartphones"){
          return ( 
            <>
            <h1>SmartPhones</h1>
            <StyledCard key={products.id}>
              <div title={products.title}>
                <Image src={products.thumbnail} alt={products.title} />
                <h2> Offer Price : ${products.price}</h2>
                <Title level={4}>
                  {products.stock > 30 ? (
                    <h3 style={{ color: "#0f0" }}>{products.stock} in Stock</h3>
                  ) : (
                    <h3 style={{ color: "#f00" }}> Out in Stock</h3>
                  )}
                </Title>
                <Button>Add to Cart</Button>
              </div>
            </StyledCard>
            </>
        )}
      })}
      </StyledContainer>
    </>
  );
};

/* Note :
1 > res.data refers to the response data returned by the api 
2 > data is the state variable that holds the array of products in your component
*/

// Use embedded route or split the component or the best option is to use the state so that the clicked items will only be clicked 