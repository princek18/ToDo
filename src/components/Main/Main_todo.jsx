import React from 'react'
import './Main_todo.css'
import Todo_list from './Todo_list'
import { useState } from 'react'

export default function Main_todo({todo_list, Delete, AddTodo}) {    
    const[title, setTitle] = useState("");

    const HandleSubmit = (e)=>{
        e.preventDefault();
        AddTodo(title);
        setTitle("");
    }

    const HandleChange = (e)=>{
        setTitle(e.target.value);
    }
    return (
        <div className="main">
            <form className="container" onSubmit={HandleSubmit}>
                <div className="mb-3 col-6">
                    <label htmlFor="task" className="form-label">Add ToDo</label>
                    <input type="text" value={title} onChange={HandleChange} className="form-control" id="task" aria-describedby="emailHelp" required />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
            {todo_list.length!==0?todo_list.map((todo)=>{return <Todo_list todo={todo} Delete={Delete}/>}):<h4 className="container">Nothing to display!</h4>}
        </div>
    )
}
