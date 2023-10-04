// will daily contribute something to this file and i don't have any execuses
// will learn how to manage state within components and how to pass data and behaviour down to child component using props.
// state , effect and use context hooks
// React Router - create multipage applications with smooth navigation
// Redux or other state mangement tools
// React Forms
// styling in React
// React performance
// Error handeling

import { useState } from "react";
import Child from "./child";

export default function Parent() {
  const [count, setCount] = useState<number>(0);


  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Child
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

