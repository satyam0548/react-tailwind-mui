import react from 'react'
import { Button, IconButton, Pagination, Switch } from '@mui/material';
import Navbar from './Navbar'

import './index.css'

function App() {
  return (
    <div className="  bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-repeat-y-X ">
      <Navbar />
      <div>
    <div>
    <h1 className='text-6xl mt-6 ml-5 font-semibold text-white hover:text-violet-400 '><span>PhotoSHooT</span></h1>
      <p className=" font-sherif  mx-4 my-8 subpixel-antialiased ...  Class
                     Properties  font-thin text-xs w-2/3 hover:text-pink-400 text-blue-200 tracking-widest">
        A <span className="hover:bg-fuchsia-600 border-radius-0.5rem text-pink-300 ">photo shoot</span> is the process taken by creatives and models that results in a visual objective being obtained. An example is a model posing for a photographer at a studio or an outdoor location.<br/><br/>

A photo shoot is a series of images that are taken, with the goal of obtaining images that can then be placed into post-production, or editing. These images are then used for print/digital advertising, business collateral, or just for personal use.<br/><br/>
</p>
<div className='mx-2 mb-0'>
<Button variant="outlined" color='primary' size="large">Open Gallary</Button>




</div>
    </div>
    <div className="columns-2xs ... mx-8 mt-2 mb-2 border-2 border-blue-200 px-2 py-2 ">
  <img className="w-full aspect-square ..." src="https://i.insider.com/5a258ab23339b025218b45c0?width=1000&format=jpeg&auto=webp" />
  <img className="w-full aspect-square ..." src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" />
  <img className="w-full aspect-square ..." src="https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802__340.jpg" />
  <img className="w-full aspect-square ..." src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg" />
  
</div>
     </div>
     
   <span className='flex justify-center bg-blue-300 pt-2 '>
   <Switch defaultChecked color="error" />
     <Pagination count={10} color="primary" variant="outlined" />
     
    
   </span>
    </div>
  );
 
  
}

export default App
