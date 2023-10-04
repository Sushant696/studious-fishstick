import axios from "axios";
import { useEffect, useState } from "react";
import { StyledCard , StyledContainer} from "../styling";
import { Button , Typography,Image } from "antd";
import Navbar from "../../Pages/navbar";
const {Title} = Typography;

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

export const Laptops = () => {
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
        <h1>Laptops</h1>
      <StyledContainer>
        {data?.products.map((products) => {
          if (products.category=== "laptops"){
          return ( 
            <>
            <StyledCard key={products.id}>
              <div>
              <h1>{products.title}</h1>
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

