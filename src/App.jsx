import './App.css'
import { UseState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/Todoform/TodoForm';
import UserInfo from './components/UserInfo/UserInfo';
import Todolist from './components/Todolist/Todolist';

function App() {

  const name = 'Janusz';
  const age = 30;

  const [todos, setTodos] = useState(
    'Nauczyc sie reacta',
    'zrobic zadanie domowe',
    'powtorzyc Javascript',
  )

  return ( 
    <>
    <Header /> 

    <UserInfo name ={name} age={age} />
    <TodoForm />
    <TodoList todos={todos} />

    </>

); 
}

export default App;
