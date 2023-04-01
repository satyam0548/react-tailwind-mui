import Navbar from "./Navbar";
import { DiChrome } from "react-icons/di";

function Contacts(){
    return (

        <div className=" bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-repeat-y-X" >
            <Navbar /><br/><br/><br/><br/><br/><br/><br/>
           <div className="text-center bg-orange-50 mx-80 mt-2 pb-4 pt-4   rounded-lg shadow-lg shadow-cyan-400 " >
           <h2 className="text-4xl text-blue-500 font-serif ">Contacts:</h2><br/><br/>
            <ul className="text-green-700 ">
                <li className="font-serif"><b>Name</b>: Satyam Singh</li>
                <li className="font-serif"><b>Email</b>: Satyam9453963823@gmail.com</li>
             <li className="font-serif"> <b>Phone No</b>: +91 9453963823 <DiChrome/>  </li>
                
            </ul>
           </div><br/><br/><br></br><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Contacts