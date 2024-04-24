import { getAllTodos } from "../API/todos";

const todosList = [];

export async function loadTodos() {
    const todos = await getAllTodos();
    todosList.push([...todos]);
    return [...todosList];
} 

export function addTodo() {
    
}

export function updateTodo() {

}