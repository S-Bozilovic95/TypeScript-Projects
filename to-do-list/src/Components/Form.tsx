import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context';


export const Form: React.FC = () => {
    const{handleAllToDos} = useContext(Context);
    const [toDo, setToDo] = useState<string>("");

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAllToDos(toDo);
        setToDo("");
    }

    const handleToDo =(value:string)=>{
        setToDo(value);
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={toDo} onChange={(e)=>handleToDo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
}