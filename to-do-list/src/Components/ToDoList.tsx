import React, { useContext } from 'react';
import { AiFillDelete} from 'react-icons/ai';
import { Context } from '../Context/Context';



export const ToDoList: React.FC = () => {
    const{allToDos,handleDelete} = useContext(Context);



    return (
        <ul>
            {allToDos.length != 0 ? allToDos.map((el,index)=>{
                return <li key={index}>{el}<i onClick={()=>handleDelete(index)}><AiFillDelete/></i></li>
            }): "no data"}
        </ul>
    );
}