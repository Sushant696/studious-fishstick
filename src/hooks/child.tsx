import { Button } from "antd"

interface MyProps {
    count : number ,
    onIncrement : () => void ;
    onDecrement : () => void ;

}


export default function Child( { count, onIncrement, onDecrement }: MyProps) {

    return (
      <div>
        <h2>Count : {count}</h2>
        <Button onClick={onIncrement} >Increment</Button>
        <Button onClick={onDecrement} >Decrement</Button>
    </div>
  )
}
