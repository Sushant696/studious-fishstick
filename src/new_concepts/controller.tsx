import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";

export default function TempControl() {
  const [temp, setTemp] = useState<number>(16);

  const handleIncremet = () => {
    return setTemp(temp + 1);
  };
  const handleDecrement = () => {
    temp > 16 && setTemp(temp - 1);
  };
  return (
    <div>
      <Card style={{ textAlign: "center" }}>
        <h1>Ac Master remote</h1>
        <Button
          size="large"
          style={{ margin: "1rem" }}
          onClick={handleIncremet}
        >
          <CaretUpOutlined />
        </Button>
        <Button size="large" >
          {temp}
        </Button>
        <Button
          size="large"
          style={{ margin: "1rem" }}
          onClick={handleDecrement}
        >
          <CaretDownOutlined />
        </Button>
        <div>
          <p>Hello is it working now ?</p>
        </div>
      </Card>
    </div>
  );
}
// the color should change when i increase or decrease the tempture of the room.


