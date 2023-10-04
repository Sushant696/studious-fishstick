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

export   const SmartPhones = () => {
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
      <StyledContainer>
        <h1>Smartphones</h1>
        {data?.products.map((products) => {
          if (products.category=== "smartphones"){
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








// no drop down menu just product list section . With 4/5 button each indicating various category  -- : All , laptops , smartPhones , SkinCare , Grocery 

// will learn how to pass these values as props 
// the problem that i encontered was data variable was null at the initial moment and when passing the props it still was null so noting rendered that was the reason . If i have to pass these thing then i can do something like if the data is true or the state is true then only pass the props to other child components 

//  it's not easy to do this but will do by very basic and easy method and will eventually update when i will be pro at handling props 

// Frist  let me do it my way then i will do it by chat gpt's way lets check