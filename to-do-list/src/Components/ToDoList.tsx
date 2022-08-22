import React from 'react';
import { AiFillDelete} from 'react-icons/ai';

type ToDoListProps = {
    allToDos: string[],
    handleDelete: (id: number) => void
}

export const ToDoList: React.FC<ToDoListProps> = ({allToDos,handleDelete}) => {


    return (
        <ul>
            {allToDos.length != 0 ? allToDos.map((el,index)=>{
                return <li key={index}>{el}<i onClick={()=>handleDelete(index)}><AiFillDelete/></i></li>
            }): "no data"}
        </ul>
    );
}