import React, { useState } from 'react';
import { createContext } from 'react';

type InitalType ={
    allToDos: string[],
    handleAllToDos: (el: string) => void,
    handleDelete: (value: number) => void
}

const initalState = {
    allToDos: [],
    handleAllToDos: (el: string) => {},
    handleDelete: (value: number) => {}
}
export const Context = createContext<InitalType>(initalState);


type ContextToDoProviderProps = {
    children: React.ReactNode
}


export const ContextToDoProvider: React.FC<ContextToDoProviderProps> = ({children}) => {
    const[allToDos, setAllToDos] = useState<string[]>([]);

    const handleAllToDos = (el:string) =>{
        setAllToDos([...allToDos,el]);
    }

    const handleDelete =(value:number) =>{
        setAllToDos(allToDos.filter((el,index)=> index!=value))
    }

    return (
        <Context.Provider value={{allToDos,handleAllToDos,handleDelete}}>
            {children}
        </Context.Provider>
    );
}