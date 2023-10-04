interface MyProps {
    carProp : string[];
    ObjProps : {
      name : string ,
      date : number ,
      email : string ,
      brand : string ,

    };
} 


export default function PropropsChlid(props : MyProps) {
    const {carProp , ObjProps } = props
    return (
    <>
        <h1 className="" >Passing array as props and rendering</h1>
        <br />
      {carProp.map((curr , index )=>(
        <>
        <h4 key={index}>{index+1}. {curr}</h4>
        </>
      ))}
      <h3>Name : {ObjProps.name}</h3>
    </>
  )
}
 