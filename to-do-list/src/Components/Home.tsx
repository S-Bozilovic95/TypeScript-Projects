import React, { useState } from 'react'
import { Form } from './Form';
import { ToDoList } from './ToDoList';


export const Home: React.FC = ({}) => {
    const[allToDos, setAllToDos] = useState<string[]>([]);

    const handleAllToDos = (el:string) =>{
        setAllToDos([...allToDos,el]);
    }

    const handleDelete =(value:number) =>{
        setAllToDos(allToDos.filter((el,index)=> index!=value))
    }
    
    
    return (
        <section>
            <Form handleAllToDos={handleAllToDos}/>
            <ToDoList allToDos={allToDos} handleDelete={handleDelete}/>
        </section>
    );
}