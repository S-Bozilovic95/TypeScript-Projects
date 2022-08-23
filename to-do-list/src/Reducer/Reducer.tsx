export type Action = {type: "addToDo", payload: string} | {type: "deleteToDo", payload: number}


export const Reducer = (state:string[],action:Action) =>{

    switch (action.type) {

        case "addToDo":
            return [...state,action.payload];
            

        case "deleteToDo":
            return state.filter((el,index)=> index!=action.payload);
            
    
        default:
            return state;
            
    }
}