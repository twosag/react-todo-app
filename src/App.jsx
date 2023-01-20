import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'
import { collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc, } from 'firebase/firestore'
import {db} from './firebase'

const style = {
  bg: `h-screen w-screen p-4 bg-white`,
  container: `max-w-[500px] w-full m-auto rounded-md bg-blue-500 border-2 p-5 border-blue-600 shadow-xl border-solid`,
  heading: `text-3xl text-center font-bold text-slate-100 p-2`,
  form: `flex justify-between `,
  input: `rounded-md pl-3 w-full bg-slate-100`,
  button: `bg-slate-100 p-2 ml-2 rounded-md`,
  count: `text-center text-xl text-slate-100`

}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

//Create todo
const createTodo = async (e) => {
  e.preventDefault(e);
  await addDoc(collection(db, 'todos'), {
     text: input,
     completed: false
  })
  setInput('')
};

//Read todo from Firebase
useEffect(()=>{
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
},[])
//Update todo in Firebase
const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id),{
    completed: !todo.completed
  })
}
//Delete todo
const deleteTodo = async(id) => {
  await deleteDoc(doc(db, 'todos'))
}

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) =>setInput(e.target.value)} className={style.input} type="text" placeholder='Add task'/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
        {todos.map((todo, index)=>(
          <Todo key={index} todo = {todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))}
        </ul>
        <p className={style.count}>{`Make ${todos.length} todos`}</p>
      </div>
    </div>

  )
}

export default App

