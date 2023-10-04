import { SetStateAction, useState } from "react";
import Navbar from "../Pages/navbar";

export default function ControlledComponent() {
  const [formData, setFormData] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <form>
        <label>
          Name :
          <input type="text" value={formData} onChange={handleChange} />
        </label>
        <p> Input value : {formData}</p>
      </form>
      <DropDown/>
    </div>
  );
}

export function DropDown() {
  const [dropDown, setDropDown] = useState<string>("");
  const handleDropDown = (e: { target: { value: SetStateAction<string>; }; }) =>{
    setDropDown(e.target.value)
  }
  return (
    <div>
      <label>
        <select name="dropdown" value={dropDown} onChange={handleDropDown}>
          <option value="option-1">Option-1</option>
          <option value="option-2">option-2</option>
          <option value="option-3">Option-3</option>
        </select>
      </label>
    </div>
  );
}
