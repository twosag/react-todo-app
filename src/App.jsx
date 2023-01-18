import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'

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
  const [todos, setTodos] = useState(['Learn React', 'Do homework'])

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add task'/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
        {todos.map((todo, index)=>(
          <Todo key={index} todo = {todo}/>
        ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>

  )
}

export default App

