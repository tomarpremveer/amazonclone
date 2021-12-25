import { useEffect,useState } from "react";
import Layout from "../components/layout";

export default function Cart(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('/api/hello')
        .then(response => response.json())
        .then(data =>{
            setItems(data.items)
        })
        .catch(error =>  console.log(error))
    },[])
    return (
        <Layout>
        <div>
            {
                items.length ? items.map(item=>(
                    <p key={item.id}>{item.name}</p>
                )) : "No item found"
            }
        </div>

        </Layout>
    )
}