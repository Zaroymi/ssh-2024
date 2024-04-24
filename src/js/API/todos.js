const BASE_URL = 'https://dummyjson.com';

export async function getAllTodos() {
    const response = await fetch(`${BASE_URL}/todos`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'cors'
    });
    const { todos } = await response.json();
    return todos;
}

export async function addTodo() {
    const response = await fetch(`${BASE_URL}/todos/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: 'Use DummyJSON in the project',
            completed: false,
            userId: 5,
        })
    });

    return response;
}

export async function updateTodo(id, text) {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: text,
            completed: false,
            userId: 5,
        }),
    });

    return response;
}
