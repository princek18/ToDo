import './App.css';
import Head_todo from './components/Header/Head_todo';
import Foot_todo from './components/Footer/Foot_todo';
import Main_todo from './components/Main/Main_todo';
import { useState } from 'react';

function App() {
  const AddTodo = (title)=>{
    let k;
    if(title.length < 10){
      k = {
        title: title,
        desc: title
      }
    }
    else{ 
    k = {
      title: title.substring(0, 10) + "...",
      desc: title
    }
  }
    setTodo_list([...todo_list, k]);
  }

  const Delete = (e)=>{
    setTodo_list((todo_list.filter(item => item !== e)));
  }

  const[todo_list, setTodo_list] = useState([])
  
  return (
    <div className="App">
      <Head_todo/>
      <Main_todo todo_list={todo_list} Delete={Delete} AddTodo={AddTodo}/>
      <Foot_todo/>
    </div>
  );
}

export default App;
