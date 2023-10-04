import { FacebookOutlined  ,TwitterOutlined ,LinkedinFilled } from "@ant-design/icons"
import Navbar from "./navbar"
export default function Contact() {

    return (
      <div style={{textAlign:'center'}}>
      <Navbar/>
      <h1>Contact us via :</h1>
      <ul style={{listStyle:'none'}}>
        <li>Facebook <a href="https://facebook.com"><FacebookOutlined /></a> </li>
        <li>Twitter <a href="https://twitter.com"> <TwitterOutlined /></a></li>
        <li>LinkedIn <a href="https://www.linkedin.com/"> <LinkedinFilled /></a></li>
      </ul>
      <h3>Contact no :  <i>+12 4267 8765</i></h3>
      <h3> Email : <i> lettertosushant7@gmail.com</i> </h3>
      
    </div>
  )
}
