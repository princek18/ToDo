import React from 'react'
import  './Todo_list.css'

export default function Todo_list({todo, Delete}) {
    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //       color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    //   }
    return (
        <div className="container">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{
                Delete(todo);
            }}>Delete</button>
        </div>
    )
}
