import React, { useState } from 'react'
import { Form } from './Form';


export const Home: React.FC = ({}) => {
    const[allToDos, setAllToDos] = useState<string[]>([]);

    const handleAllToDos = (el:string) =>{
        setAllToDos([...allToDos,el]);
    }


    console.log(allToDos);
    
    return (
        <section>
            <Form handleAllToDos={handleAllToDos}/>
        </section>
    );
}