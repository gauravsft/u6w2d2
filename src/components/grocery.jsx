import React from "react";
import GroceryInput from "./groceryInput";
import GroceryList from "./groceryList";
import { v4 as uuidv4 } from 'uuid';

function Grocery(){
    const [data, setData] = React.useState([]);
    const handleUpdate = (title) => {
        const groceryItem = {
            title : title,
            id : uuidv4()
        }
        setData([...data, groceryItem]);
    }
    const handleDelete = (itemId) => {
        data.map((item,index) => {
            if(item.id === itemId){
                data.splice(index,1);
                const newData = [...data];
                setData(newData);
            }
        })
    }
    return (
        <>
        <h1>Grocery</h1>
        <GroceryInput handleUpdate={handleUpdate} />
        <GroceryList data={data} handleDelete={handleDelete}/>
        </>
    )
}

export default  Grocery;