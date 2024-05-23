import './App.css';
import { useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";



function App() {
  const [TodoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }
  const addTask =()=>{
    // const newTodoList = [...TodoList, newTask];
    setTodoList([...TodoList, newTask]);
  }
  const deleteTask =(taskName)=>{
    setTodoList(TodoList.filter((task) => task !== taskName));
  }
  localStorage()
 return(
  <>
  <div className='addtask'>
    <input onChange={handleChange}/>
    <button onClick={addTask}>Add Task</button>
  </div>
  <div className='list'>{TodoList.map((task)=>{
    return<h1 key={task.id}>{task} <RiDeleteBin6Fill onClick={() =>deleteTask(task)}/></h1>})}
  </div>
</> 
 ) 
 
}

export default App;
// const [age, setAge] = useState(0)

//   const add =()=>{
//     setAge(age + 1)
//   }
//   return (
//    <>
//       <h1>{age}</h1>
//       <button onClick={add}>increment</button>
//    </>
    
//   );