import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";


function Gallary(){
    
    const [user , setUser] = useState([])
    
    
    const api = `https://jsonplaceholder.typicode.com/photos`

    // const output = async ()=>{
    //     const response = await axios.get(api)
    //     const data = response.data
    //     console.log(data)                            
        
    //     return response
    // }

    const output1 = async ()=>{
        const response1 = await fetch(api)
        .then((response) => response.json())
        .then((data) => setUser(data));
        return response1           
    }
    useEffect(()=>{
     output1();
    //  output()
    },[])
    
    
    return (
        <div className=" bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-repeat-y-X">
            <Navbar />
      
            <h2 className="mx-2 px-2 text-zinc-400 bg-h-2 text-center text-4xl bg-red-300 font-bold ">Gallary</h2>
        
            <br/>
           <div className="flex justify-evenly flex-wrap mx-2 px-2 mb-4  " >
           {
                user.map((item:any)=>{
                    return <div className=" mb-2 px-2">
                        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b> {item.id}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                    </div>
                })
            }
           </div>

        </div>
    );
}

export default Gallary