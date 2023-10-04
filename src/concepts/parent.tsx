import PropropsChlid from "./propros";

export default function Parent() {
    const cars: string[] = [
    "Rolls Royace",
    "Bently",
    "Dodge Challenger",
    "Audi R8",
    "Ford Mustang gt",
  ];
  const CarsObj = {
    name  : "mustang",
    brand : "ford",
    date : 2000 ,
    email : "noreplyford@gmail.com"
  }

  return <div>
    <PropropsChlid carProp = {cars} ObjProps = {CarsObj} />
  </div>;
}
