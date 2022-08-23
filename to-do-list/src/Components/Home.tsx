import React from 'react'
import { Form } from './Form';
import { ToDoList } from './ToDoList';


export const Home: React.FC = ({}) => {
    
    return (
        <section>
            <Form/>
            <ToDoList/>
        </section>
    );
}